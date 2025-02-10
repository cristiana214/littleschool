/* eslint-disable jsx-a11y/anchor-is-valid */

"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <div className="bg-green-900 text-green-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h2 className="mb-4 text-2xl font-bold" />
            <img
              src="/logo.png?height=50&width=150"
              alt="logo"
              className="h-12"
            />
            <p className="mb-4">{siteConfig.tagLine}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-green-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/category/fruit-vegetables/"
                  className="transition-colors hover:text-green-300"
                >
                  Products
                </Link>
              </li>

              <li>
                <a
                  href="/about/"
                  className="transition-colors hover:text-green-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-green-800 pt-8">
          <div className="flex items-center justify-between">
            <p>
              &copy; 2025 Next Boilerplate by cristiana. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
