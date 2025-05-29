// export const API_BASE_URL = "http://localhost:3000"
export const API_BASE_URL = 'https://api.rapideapp.mg'

export const TIMEOUT = 10000

const BASE_URL_DELETE_PROFILE = 'delete-profile'

export const ROUTE_DELETE_PROFILE_STEP_1 =
    BASE_URL_DELETE_PROFILE + '/by-customer'
export const ROUTE_DELETE_PROFILE_STEP_2 =
    BASE_URL_DELETE_PROFILE + '/confirm-delete-infornation'
export const ROUTE_DELETE_PROFILE_STEP_3 =
    BASE_URL_DELETE_PROFILE + '/send-delete-code-confirnation'
export const ROUTE_DELETE_PROFILE_STEP_4 =
    BASE_URL_DELETE_PROFILE + '/confirm-delete-profile'

export const ROUTE_DELETE_PROFILE_RESEND_OTP =
    BASE_URL_DELETE_PROFILE + '/resend-code'
