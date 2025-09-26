import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "ts", "mdx", "md"],
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
