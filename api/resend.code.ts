import apiClient from './main'
import { ROUTE_DELETE_PROFILE_RESEND_OTP } from '../constants/Api'
import { AxiosErrorCustom } from './axios.error'
import { useMutation } from '@tanstack/react-query'

const resendCode = async ({ clientProfileId }: { clientProfileId: string }) => {
    try {
        const response = await apiClient.post(ROUTE_DELETE_PROFILE_RESEND_OTP, {
            clientProfileId,
        })
        return response.data
    } catch (error) {
        throw new AxiosErrorCustom(error)
    }
}

export const useResendCode = () => {
    return useMutation({
        mutationFn: resendCode,
    })
}
