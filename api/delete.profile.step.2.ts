import { useMutation } from '@tanstack/react-query'
import { ROUTE_DELETE_PROFILE_STEP_2 } from '../constants/Api'
import { AxiosErrorCustom } from './axios.error'
import apiClient from './main'
import { DelProfileStep2Response } from '../interface/delProfileStep2Response.interface'

interface DeleteProfileStep2Interface {
    clientProfileId: string
    code: string
}

const deleteProfileStep2 = async ({
    clientProfileId,
    code,
}: DeleteProfileStep2Interface) => {
    try {
        const response = await apiClient.post<DelProfileStep2Response>(
            ROUTE_DELETE_PROFILE_STEP_2,
            {
                clientProfileId,
                code,
            }
        )
        return response.data
    } catch (error) {
        throw new AxiosErrorCustom(error)
    }
}

export const useDeleteProfileStep2 = () => {
    return useMutation({
        mutationFn: deleteProfileStep2,
    })
}
