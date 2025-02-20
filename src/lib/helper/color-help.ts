export const getDarkerShade = (color: string) => {
  const match = color.match(/^(bg-[a-zA-Z]+)-(\d+)$/);
  if (match) {
    const [, base, shade] = match;
    const shadeMap: Record<string, string> = {
      "50": "200",
      "100": "300",
      "200": "400",
      "300": "500",
      "400": "500",
      "500": "600",
      "600": "700",
      "700": "800",
    };
    return `${base}-${shadeMap[shade] || shade}`;
  }
  return color;
};
