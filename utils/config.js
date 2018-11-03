const environments = {};

environments.staging = {
  'port': 5000,
  'envName': 'staging'
};

environments.production = {
  'port': 3000,
  'envName': 'production'
};

// Determine the environment that was passed as command-line argument
const currentEnvironment = process.argv[2] == 'production' ? 'production' : 'staging';

module.exports = environments[currentEnvironment];