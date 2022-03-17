
// Api Url
const LIVE_API_URL = "http://"
const TEST_API_URL = "http://localhost:8080/api/"
const CURRENT_API_URL = TEST_API_URL

const DESTINATION_URL = "http://localhost:8080/api/:path*" // backend server api url
const SOURCE_PATH = "/:path*"

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
