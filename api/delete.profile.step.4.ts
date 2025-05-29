import { useMutation } from '@tanstack/react-query'
import { ROUTE_DELETE_PROFILE_STEP_4 } from '../constants/Api'
import { AxiosErrorCustom } from './axios.error'
import apiClient from './main'

interface DeleteProfileStep4Interface {
    clientProfileId: string
    code: string
}

const deleteProfileStep4 = async ({
    clientProfileId,
    code,
}: DeleteProfileStep4Interface) => {
    try {
        const response = await apiClient.delete(ROUTE_DELETE_PROFILE_STEP_4, {
            data: {
                clientProfileId,
                code,
            },
        })
        return response.data
    } catch (error) {
        throw new AxiosErrorCustom(error)
    }
}

export const useDeleteProfileStep4 = () => {
    return useMutation({
        mutationFn: deleteProfileStep4,
    })
}
