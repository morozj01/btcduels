/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/inbound',
        destination: '/',
        permanent: false,
      },

      // IOS App Store
      {
        source: '/app-store',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '^(iPhone.+|.+iPhone|.+iPhone.+|iPad.+|.+iPad|.+iPad.+|iPod.+|.+iPod|.+iPod.+)$',
          },
        ],
        permanent: false,
        destination: 'https://apps.apple.com/us/app/iterati/id1673071828',
      },

      // Android App Store
      {
        source: '/app-store',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '^(Android.+|.+Android|.+Android.+)$',
          },
        ],
        permanent: false,
        destination: 'https://play.google.com/store/apps/details?id=com.zkladder.iterati',
      },

      // Default to apple if user-agent does not indicate request from mobile
      {
        source: '/app-store',
        permanent: false,
        destination: 'https://apps.apple.com/us/app/iterati/id1673071828',
      },
    ];
  },
};

module.exports = nextConfig;
