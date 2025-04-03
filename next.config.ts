import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/stats/:match*",
      destination: "https://cloud.umami.is/:match*",
    },
  ],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
