const envalid = require('envalid')
const { cleanEnv, str, port } = envalid

  function validateEnv() {
    cleanEnv(process.env, {
      MONGO_PASSWORD: str(),
      MONGO_PATH: str(),
      MONGO_USER: str(),
      PORT: port(),
    });
  }
  
  export default validateEnv;