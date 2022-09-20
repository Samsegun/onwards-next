const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const withNextEnv = nextEnv();
module.exports = withNextEnv();

// module.exports = {
//     webpack: {
//         // webpack config properties
//     },
//     env: {
//         MY_ENV_VAR: process.env.SECRET,
//         MY_ENV_VAR2: process.env.MY_ENV_VAR2,
//     },
// };
