// Components
import SignUpCard from '../../components/card/signUpCard';
import IntroduceCompany from '/components/introduce/company';

const layoutInfo = {
  title : "Sign Up",
  description : "Samatti Sign up"
}

function SignIn() {

    return (
        <>
            <div className="bg-indigo-50">
                <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                    {/* 로그인 카드 */}
                    <SignUpCard/>
                    
                    {/* 플랫폼 소개 */}
                    <IntroduceCompany/>
                    
                </div>
            </div>
        </>
    )
}

export default SignIn;
