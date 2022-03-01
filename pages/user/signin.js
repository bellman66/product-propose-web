// Components
import SignInCard from '/components/card/signinCard';

// Swr
import useUserInfo from '/data/user/info'

const layoutInfo = {
  title : "Sign In",
  description : "Samatti Sign In"
}

function SignIn() {
    const { loggedIn, info } = useUserInfo()

    // Already Login
    if (loggedIn) {
        return(
            <>
                <div className="bg-indigo-50">
                    <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                        <p> 로그인 상태입니다. </p> 
                        <p> User : {info.email} </p>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="bg-indigo-50">
                <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                    {/* 로그인 카드 */}
                    <SignInCard/>
                </div>
            </div>
        </>
    )
}

export default SignIn;
