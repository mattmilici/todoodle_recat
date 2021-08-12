import { useState } from "react"
import { WindowUtil } from "./WindowUtil";
import axios from "axios"

function PasswordReset() {

    const token = WindowUtil.getQuery("token")
    const [newPassword, setNewPassword] = useState("")
    const [status, setStatus] = useState("")

    const resetPassword = async () => {
        try {
            const response = await axios.post('https://api.todoodle.app/v1/user/auth/resetPassword/token', {
                password: newPassword,
                token
            });
            setNewPassword("")
            setStatus("We have updated your password")
        } catch (e) {
            setStatus("We can't update your password")
        }
    }

    return (
        <div className="bg-white p-6 md:p-20 text-white h-screen w-full">
            <div className=" mx-1 my-12 md:mx-32 md:my-12 lg:mx-56 lg:my-24">
                <h1 className="text-7xl md:text-8xl font-bold mb-12 text-todoodleBlack">
                    Todoodle
                </h1>
                <h1 className="mb-2 text-xl md:text-2xl ">
                    Classic, forgot your password
                </h1>
                {status && <h3>{status}</h3>}
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                    <form name="contact" method="post" className="mt-3 sm:flex" onSubmit={(e) => {
                        e.preventDefault()
                        resetPassword()
                    }}>
                        <label htmlFor="password" className="sr-only">
                            New Password
                        </label>
                        <input
                            type="password"
                            className="border-todoodleBlack block w-full py-3 pl-2 rounded-md placeholder-gray-800 shadow-sm sm:flex-1 "
                            placeholder="Enter a new password"
                            value={newPassword}
                            onChange={(e) => {
                                e.preventDefault()
                                setNewPassword(e.target.value)
                            }}
                        />
                        <button
                            type="submit"
                            className="mt-3 w-full px-6 py-3 border text-todoodleWhite border-transparent text-base font-medium rounded-md  bg-todoodleBlack shadow-sm hover:bg-gray-800 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                        >
                            Reset
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset
