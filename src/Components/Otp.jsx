import React from 'react'

export const Otp = () => {
    return (
        <>
            <form className="otp-Form mx-auto my-6">

                <span className="mainHeading">Enter OTP</span>
                <p className="otpSubheading">We have sent a verification code to your mobile number</p>
                <div className="inputContainer">
                    <input required="required" maxlength="1" type="text" className="otp-input" id="otp-input1" />
                    <input required="required" maxlength="1" type="text" className="otp-input" id="otp-input2" />
                    <input required="required" maxlength="1" type="text" className="otp-input" id="otp-input3" />
                    <input required="required" maxlength="1" type="text" className="otp-input" id="otp-input4" />
                    <input required="required" maxlength="1" type="text" className="otp-input" id="otp-input4" />
                    <input required="required" maxlength="1" type="text" className="otp-input" id="otp-input4" />

                </div>
                <button className="verifyButton" type="submit">Verify</button>
                {/* <button className="exitBtn">×</button> */}
                <p className="resendNote text-lg">Didn't receive the code? <button className="resendBtn">Resend Code</button></p>

            </form>
        </>
    )
}
