export const PhoneNumberFormat = (phoneNumber: string) => {
    return phoneNumber.replace(
        /^\+261(\d{2})(\d{2})(\d{3})(\d{2})$/,
        '+261 $1 $2 $3 $4'
    )
}
