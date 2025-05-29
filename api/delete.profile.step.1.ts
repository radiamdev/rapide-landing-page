import { useMutation } from '@tanstack/react-query'
import { ROUTE_DELETE_PROFILE_STEP_1 } from '../constants/Api'
import { AxiosErrorCustom } from './axios.error'
import apiClient from './main'
import { DelProfileStep1Response } from '../interface/delProfileStep1Response.interface'

interface DeleteProfileStep1Interface {
    phoneNumber: string
}

const deleteProfileStep1 = async ({
    phoneNumber,
}: DeleteProfileStep1Interface) => {
    try {
        const response = await apiClient.post<DelProfileStep1Response>(
            ROUTE_DELETE_PROFILE_STEP_1,
            { phoneNumber }
        )
        return response.data
    } catch (error) {
        throw new AxiosErrorCustom(error)
    }
}

export const useDeleteProfileStep1 = () => {
    return useMutation({
        mutationFn: deleteProfileStep1,
    })
}
