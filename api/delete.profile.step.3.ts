import { useMutation } from '@tanstack/react-query'
import { ROUTE_DELETE_PROFILE_STEP_3 } from '../constants/Api'
import { AxiosErrorCustom } from './axios.error'
import apiClient from './main'

const deleteProfileStep3 = async ({
    clientProfileId,
}: {
    clientProfileId: string
}) => {
    try {
        const response = await apiClient.post(ROUTE_DELETE_PROFILE_STEP_3, {
            clientProfileId,
        })
        return response.data
    } catch (error) {
        throw new AxiosErrorCustom(error)
    }
}

export const useDeleteProfileStep3 = () => {
    return useMutation({
        mutationFn: deleteProfileStep3,
    })
}
