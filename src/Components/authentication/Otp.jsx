import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';

export const Otp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { signupData, loading } = useSelector((state) => state.auth);
    const [otp, setOtp] = useState("");

    console.log('Signupdata : ', signupData);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Button cliked')
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData

        dispatch(signUp(
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp, 
            navigate
        ))
    }

    console.log("otp : ", otp)
    return (
        <>
            <form onSubmit={submitHandler} className="otp-Form mx-auto my-6">

                <span className="mainHeading">Enter OTP</span>
                <p className="otpSubheading">We have sent a verification code to your mobile number</p>
                <div className="inputContainer">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => (
                            <input
                                {...props}
                                placeholder="-"
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="w-[48px] lg:w-[60px] border-0 bg-gray-300 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-blue-500"
                            />
                        )}
                        containerStyle={{
                            justifyContent: "space-between",
                            gap: "0 6px",
                        }}
                    />

                </div>
                <button className="verifyButton" type="submit" >Verify</button>
                {/* <button className="exitBtn">×</button> */}
                <p className="resendNote text-lg">Didn't receive the code? <button className="resendBtn">Resend Code</button></p>

            </form>
        </>
    )
}
