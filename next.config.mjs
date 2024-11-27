/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/", // Điều hướng từ /sign-in đến /pages/sign-in
      },
      // {
      //   source: "/sign-up",
      //   destination: "/pages/sign-up", // Điều hướng từ /sign-up đến /pages/sign-up
      // },
    ];
  },
};

export default nextConfig;
