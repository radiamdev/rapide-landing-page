import {
    Button,
    Image,
    Loader,
    Modal,
    PinInput,
    TextInput,
} from '@mantine/core'
import { useEffect, useState } from 'react'
import { PhoneNumberFormat } from '../utils/phone-number-format.utils'
import { FaUserCircle } from 'react-icons/fa'
import rapideLogo from '../assets/rapide-logo.png'
import { useDeleteProfileStep1 } from '../../api/delete.profile.step.1'
import { useDeleteProfileStep2 } from '../../api/delete.profile.step.2'
import { useDeleteProfileStep3 } from '../../api/delete.profile.step.3'
import { useDeleteProfileStep4 } from '../../api/delete.profile.step.4'
import { useResendCode } from '../../api/resend.code'
import { useDisclosure } from '@mantine/hooks'

function DeleteAccount() {
    const [phoneNumber, setPhoneNumber] = useState('+261')
    const [otp, setOtp] = useState('')
    const [steps, setSteps] = useState<number>(1)
    const [clientProfileId, setClientProfileId] = useState('')
    const [opened, { open, close }] = useDisclosure(false)

    const {
        mutate: mutateStep1,
        data: dataStep1,
        error: errorStep1,
    } = useDeleteProfileStep1()
    const {
        mutate: mutateStep2,
        data: dataStep2,
        error: errorStep2,
    } = useDeleteProfileStep2()
    const { mutate: mutateStep3 } = useDeleteProfileStep3()
    const { mutate: mutateStep4 } = useDeleteProfileStep4()
    const { mutate: mutateResendCode } = useResendCode()

    const handleStep1 = async () => {
        mutateStep1({ phoneNumber })
        setSteps(2)
    }

    const handleOTP = () => {
        if (steps === 2) {
            mutateStep2({ clientProfileId, code: otp.toString() })
            setSteps(3)
            setOtp('')
        } else if (steps === 4) {
            open()
        }
    }

    const handleConfirmIdentity = () => {
        mutateStep3({ clientProfileId })
        setSteps(4)
    }

    const handleDeleteProfile = () => {
        mutateStep4({ clientProfileId, code: otp.toString() })
        close()
        setOtp('')
        setSteps(1)
    }

    const handleResendCode = () => {
        mutateResendCode({ clientProfileId })
    }

    useEffect(() => {
        if (dataStep1) {
            setClientProfileId(dataStep1.clientProfileId)
        }
        if (otp.length === 6) {
            handleOTP()
        }
    }, [dataStep1, otp])

    return (
        <>
            <div className="flex justify-center h-screen bg-image">
                <div className="flex flex-col justify-center">
                    <div className="bg-[#0c0] rounded-md p-2">
                        <Image src={rapideLogo} className="!w-[200px] m-auto" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#0c0] mb-5">
                        Account deletion page
                    </h1>
                    {/* Phone number input */}
                    {steps === 1 && (
                        <div className="flex flex-col gap-2">
                            <TextInput
                                label="Phone number"
                                leftSection=<span className="border-r border-gray-300 px-1">
                                    🇲🇬
                                </span>
                                defaultValue={'+261'}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                value={PhoneNumberFormat(phoneNumber)}
                                maxLength={13}
                                className="!font-bold"
                            />
                            <Button
                                className="!bg-[#0c0] !font-bold"
                                onClick={handleStep1}
                            >
                                Validate
                            </Button>
                        </div>
                    )}

                    {/* OTP input */}
                    {(steps === 2 || steps === 4) &&
                        (clientProfileId ? (
                            <div className="flex flex-col gap-3 items-center justify-center">
                                <label htmlFor="pin">
                                    Please enter the OTP that you received
                                </label>
                                <PinInput
                                    id="pin"
                                    length={6}
                                    type={/^[0-9]*$/}
                                    onChange={(e) => setOtp(e)}
                                />
                                <div>{errorStep2?.message}</div>
                                <Button
                                    className="!w-full !bg-[#0c0]"
                                    onClick={handleResendCode}
                                >
                                    Resend OTP code
                                </Button>
                            </div>
                        ) : errorStep1 ? (
                            <div className="flex flex-col gap-3">
                                <div className="text-red-600 text-center">
                                    {errorStep1.message}
                                </div>
                                <Button
                                    onClick={() => setSteps(steps - 1)}
                                    className="!bg-[#0c0]"
                                >
                                    Go back
                                </Button>
                            </div>
                        ) : (
                            <div className="flex  justify-center">
                                <Loader size={50} color="#0c0" />
                            </div>
                        ))}

                    {/* Confirm button */}
                    {steps === 3 &&
                        (dataStep2 ? (
                            <div>
                                <div className="flex justify-center">
                                    {dataStep2.profilePhoto ? (
                                        <Image
                                            src={dataStep2.profilePhoto}
                                            style={{
                                                borderRadius: '50%',
                                                width: '60px',
                                                height: '60px',
                                            }}
                                            alt="Rakoto"
                                        />
                                    ) : (
                                        <div className="bg-gray-100 w-[60px] h-[60px] rounded-full flex justify-center items-center">
                                            <FaUserCircle
                                                size={90}
                                                className="text-gray-400"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between">
                                        <div className="font-bold">
                                            FirstName :{' '}
                                        </div>
                                        <div className="text-gray-600">
                                            {dataStep2.firstName}
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="font-bold">
                                            LastName :{' '}
                                        </div>
                                        <div className="text-gray-600">
                                            {dataStep2.lastName}
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="font-bold">
                                            Balance :{' '}
                                        </div>
                                        <div className="text-gray-600">
                                            {dataStep2.balance} Ar
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="font-bold">
                                            Rapide wallet status :{' '}
                                        </div>
                                        <div className="text-gray-600">
                                            {dataStep2.rapideWalletStatus}
                                        </div>
                                    </div>
                                    <Button
                                        className="!bg-[#0c0] !font-bold"
                                        onClick={handleConfirmIdentity}
                                    >
                                        It's me
                                    </Button>
                                </div>
                            </div>
                        ) : errorStep2 ? (
                            <div className="flex flex-col gap-3">
                                <div className="text-red-600 text-center">
                                    {errorStep2.message}
                                </div>
                                <Button
                                    onClick={() => setSteps(steps - 1)}
                                    className="!bg-[#0c0]"
                                >
                                    Go back
                                </Button>
                            </div>
                        ) : (
                            <div className="flex  justify-center">
                                <Loader size={50} color="#0c0" />
                            </div>
                        ))}
                </div>
            </div>

            <Modal
                opened={opened}
                onClose={close}
                title="Authentication"
                className="!w-[400px]"
            >
                <p className="font-bold">
                    Do you realy want to delete your account?
                </p>
                {dataStep2 && dataStep2.balance > 0 && (
                    <p className="text-red-600 font-bold mt-2">
                        You have {dataStep2.balance} Ar in your Rapide wallet.
                        If you delete your account all your funds will be
                        transfered to Rapide balance.
                    </p>
                )}
                <div className="flex justify-between mt-5">
                    <Button
                        className="!bg-[#0c0]"
                        onClick={() => {
                            close()
                            setSteps(1)
                        }}
                    >
                        No
                    </Button>
                    <Button
                        className="!bg-red-600"
                        onClick={handleDeleteProfile}
                    >
                        Yes
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default DeleteAccount
