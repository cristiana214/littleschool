"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Minus } from "lucide-react";
import { GridItemEight, GridItemFour, GridLayout } from "@/components/ui/grid";

import Cards from "@/components/reusable/cards";
import { useProduct } from "@/hooks/query/useProduct";
import { generateUrl } from "@/lib/helper/generate-url";
import { useCartStore } from "@/lib/store/useCartStore";
import ProductSkeleton from "@/components/loading/product";
import { Badge } from "@/components/ui/badge";

export default function ProductPage({
  params,
}: {
  params: { productURL?: string };
}) {
  const [quantity, setQuantity] = useState(0);
  // handling the current active images on slide
  const [activeImage, setActiveImage] = useState(0);

  // set images from array string separated by comma
  const [images, setImages] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const { addToCart, removeFromCart } = useCartStore();

  const { data, isLoading, error } = useProduct({
    productId: params?.productURL,
  });
  // const searchParams = useSearchParams()
  // const search = searchParams.get('search');
  const product = data?.product;
  useEffect(() => {
    setImages(product?.images?.toString()?.split(",") || []);
  }, [product?.images]);

  if (isLoading) return <ProductSkeleton />;
  if (error) return <div>Error loading product</div>;

  const handleAddToCart = () => {
    if (product) addToCart(product?.productId, product);
    console.log(`Added ${quantity} ${product?.name} to cart`);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New comment:", newComment);
    setNewComment("");
  };

  return (
    <GridLayout>
      <GridItemEight>
        <title>{product?.name}</title>
        <div className="relative mb-4 aspect-square">
          {product?.images?.length ? (
            <Image
              src={`https://img-farm.s3.us-west-2.amazonaws.com/product/${generateUrl(images[activeImage])}`}
              alt={product?.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          ) : null}
        </div>
        <div className="flex gap-4 overflow-x-auto">
          {images?.length
            ? images.map((image, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative size-24 overflow-hidden rounded-md ${
                    index === activeImage ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <Image
                    src={`https://img-farm.s3.us-west-2.amazonaws.com/product/${image}`}
                    alt={`${generateUrl(product?.name || "")} thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </button>
              ))
            : null}
        </div>
      </GridItemEight>
      <GridItemFour>
        <h1 className="mb-4 text-3xl font-bold">{product?.name}</h1>

        <p className="mb-4 text-2xl font-semibold">
          P{product?.price.toFixed(2)} / {product?.unitDisplayName}
        </p>
        <div className="my-2 flex flex-wrap gap-2">
          <Link href={`/sub-category/${product?.typeUrl}/`}>
            <Badge variant="secondary">{product?.typeName}</Badge>
          </Link>
          <Link href={`/category/${product?.categoryUrl}/`}>
            <Badge variant="outline">{product?.categoryName}</Badge>
          </Link>
        </div>
        <p className="mb-4">{product?.description}</p>

        <div className="mb-4 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setQuantity(Math.max(1, quantity - 1));
              removeFromCart(product?.productId || 0);
            }}
          >
            <Minus className="size-4" />
          </Button>
          <span className="text-xl font-semibold">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setQuantity(quantity + 1);
              handleAddToCart();
            }}
          >
            <Plus className="size-4" />
          </Button>

          <Button
            onClick={() => {
              setQuantity(quantity + 1);
              handleAddToCart();
            }}
          >
            Add to Cart
          </Button>
        </div>
        <Tabs defaultValue="farmer">
          <TabsList>
            <TabsTrigger value="farmer">Farmer Profile</TabsTrigger>
            <TabsTrigger value="more-info">Description</TabsTrigger>
          </TabsList>
          <TabsContent value="more-info">
            <Cards title="Description">{product?.description}</Cards>
          </TabsContent>
          <TabsContent value="farmer">
            <Cards title={product?.seller?.name || ""}>
              <div className="mb-4 flex items-center gap-4">
                <Avatar className="size-16">
                  <AvatarImage
                    src={
                      product?.seller?.image
                        ? `https://img-farm.s3.us-west-2.amazonaws.com/product/${product.seller.image}`
                        : "https://img-farm.s3.us-west-2.amazonaws.com/user/profile.jpg"
                    }
                    alt={product?.seller?.name}
                  />
                  <AvatarFallback>{product?.seller?.name}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/farm/${product?.seller?.username}/`}>
                    <h3 className="font-semibold">
                      {product?.seller?.displayName}
                    </h3>{" "}
                  </Link>
                  <p>
                    {product?.seller?.about?.split(" ").slice(0, 25).join(" ")}
                    ...
                  </p>
                </div>
              </div>
            </Cards>
          </TabsContent>
        </Tabs>
      </GridItemFour>
    </GridLayout>
  );
}
