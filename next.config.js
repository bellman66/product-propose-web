const DESTINATION_URL = 'http://localhost:8080/api/v1/:path*' // backend server api url
const SOURCE_PATH = '/:path*'

const rewritesConfig = [
      {
        source: SOURCE_PATH,
        destination: DESTINATION_URL,
      }
];

module.exports = {
  reactStrictMode: true,
  rewrites: async () => rewritesConfig,
}
