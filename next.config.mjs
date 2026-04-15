/** @type {import('next').NextConfig} */
const nextConfig = {
  // Brug cacheComponents: true som default
  // God til lister/sider hvor data ikke ændrer sig hvert sekund.
  // Giver bedre performance og hurtigere navigation.

  // Brug cacheComponents: false kun hvis du har meget “live” data
  // Fx hvis du forventer at data skal være helt frisk ved hver request.
  // Ofte unødvendigt til en breed-liste fra Dog API.

  // Hvis en bestemt fetch skal være helt frisk,
  // styr det på fetch-niveau (fx cache: "no-store" eller next: { revalidate: 60 })
  // i stedet for at slå cache fra globalt.

  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn4.thedogapi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
