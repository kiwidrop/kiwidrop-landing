type EnvConfig = {
  // Common
  PACKAGE_VERSION: string;

  // Internal Env
  API_BASE_URL: string;
  API_BASE_URL_FOR_LYNX: string;
  API_BASE_URL_FOR_PICKKIWI: string;
  EXCLUDE_REGISTER_COUNTRIES: string[];
  // Third-party Env
  SENTRY_ENVIRONMENT: string;
  SENTRY_TRACES_SAMPLE_RATE: number;
  TYPEFORM_ID: string;

  // Just for debug
  JUST_FOR_DEBUG_X_KIWI_USER_ID: number | null;
  DS2_URL: string;
};

// Common
const { PACKAGE_VERSION } = process.env;

// Internal Env
const { API_BASE_URL, API_BASE_URL_FOR_LYNX, API_BASE_URL_FOR_PICKKIWI } = process.env;
const { EXCLUDE_REGISTER_COUNTRIES } = process.env as any;
// Third-party Env
const { SENTRY_ENVIRONMENT } = process.env;
const { SENTRY_TRACES_SAMPLE_RATE } = process.env as any;
const { TYPEFORM_ID } = process.env;
const { DS2_URL } = process.env;

export default {
  // Common
  PACKAGE_VERSION,

  // Internal Env
  API_BASE_URL,
  API_BASE_URL_FOR_PICKKIWI,
  API_BASE_URL_FOR_LYNX,
  EXCLUDE_REGISTER_COUNTRIES: JSON.parse(EXCLUDE_REGISTER_COUNTRIES),
  // Third-party Env
  SENTRY_ENVIRONMENT,
  SENTRY_TRACES_SAMPLE_RATE: JSON.parse(SENTRY_TRACES_SAMPLE_RATE),
  TYPEFORM_ID,

  // Just for debug
  JUST_FOR_DEBUG_X_KIWI_USER_ID: null,

  DS2_URL,
} as EnvConfig;
