/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/modules", destination: "/products/erpnext/modules", permanent: true },
      { source: "/modules/:slug", destination: "/products/erpnext/modules/:slug", permanent: true },
      { source: "/trial", destination: "/products/erpnext/trial", permanent: true },
    ];
  },
};

export default nextConfig;
