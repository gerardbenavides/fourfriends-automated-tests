const ENVIRONMENT = require('./environments')
const BASE_URL = require('./base-urls')

/** Checks if "env=" is available on cli arguments
    If not, returns Dev baseUrl as default
 */
const env_arg = process.argv.find( arg => {
    return arg.match(/env/)
    // return argument if it matches string `env`
})

switch (env_arg) {
    case ENVIRONMENT.BASE + ENVIRONMENT.DEV:
        baseUrl = BASE_URL.DEV;
        break;
    case ENVIRONMENT.BASE + ENVIRONMENT.STAGING:
        baseUrl = BASE_URL.STAGING;
        break;
    case ENVIRONMENT.BASE + ENVIRONMENT.PREPROD:
        baseUrl = BASE_URL.PREPROD;
        break;
    default:
        baseUrl = BASE_URL.DEV;
        console.log('Base URL not defined or arg is incorrect. Running on default Dev environment')
        break;
}

let credentials = {
    DEV: {
        admin: {
            email: 'test@mailinator.com',
            password: 'password',
        },
        manager: {
            email: 'test@mailinator.com',
            password: 'password',
        },
        cashier: {
            email: 'test@mailinator.com',
            password: 'password',
        },
        consumer: {
            email: 'test@mailinator.com',
            password: 'password',
        }
    },
    STAGING: {
        admin: {
            email: 'test@mailinator.com',
            password: 'password',
        },
        manager: {
            email: 'test@mailinator.com',
            password: 'password',
        },
        cashier: {
            email: 'test@mailinator.com',
            password: 'password',
        },
        consumer: {
            email: 'test@mailinator.com',
            password: 'password',
        }
    },
    PREPROD: {
        admin: {
            email: 'test@mailinator.com',
            password: 'password',
        },
        manager: {
            email: 'test@mailinator.com',
            password: 'password',
        },
        cashier: {
            email: 'test@mailinator.com',
            password: 'password',
        },
        consumer: {
            email: 'test@mailinator.com',
            password: 'password',
        }
    },
}

/** Checks if the value after "env=" on cli arguments matches
    any environment in environments.js file. Then returns the 
    parameters based on the environment
    If not, returns Dev parameters as default
 */

switch (env_arg) {
    case ENVIRONMENT.BASE + ENVIRONMENT.DEV:
        credentials = credentials.DEV;
        break;
    case ENVIRONMENT.BASE + ENVIRONMENT.STAGING:
        credentials = credentials.STAGING;
        break;
    case ENVIRONMENT.BASE + ENVIRONMENT.PREPROD:
        credentials = credentials.STAGING;
        break;
    default:
        credentials = credentials.DEV;
        break;
}

module.exports = {credentials, baseUrl, env_arg}
