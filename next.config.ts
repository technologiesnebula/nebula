import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera un sitio 100% estático en la carpeta `out/` para Cloudflare Pages.
  output: "export",
};

export default nextConfig;
