enum RapideWalletStatus {
    UNDETERMINED = 'UNDETERMINED',
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    FROZEN = 'FROZEN',
    CLOSED = 'CLOSED',
}

export interface DelProfileStep2Response {
    firstName: string
    lastName: string
    profilePhoto: string
    balance: number
    rapideWalletStatus: RapideWalletStatus
}
