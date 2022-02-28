import Head from 'next/head'
import Image from 'next/image'

// Layout
import DefaultLayout from '/layout/layout'

// Swr 
import useServerCheck from '/data/server/check'

const layoutInfo = {
  title : "Base Next React",
  description : "Samatti React App"
}

export default function Home() {
  const { serverDown } = useServerCheck()
  
  // Swr Error 시 확인
  // if (error) return <div> Not Connect Api </div>
  return (
    <DefaultLayout layoutInfo>
      <div className="px-6">

        {/* Api 호출 - Server Check */}
        <div>
          <span> {serverDown ? "Server Not Detected" : "Server Status OK"} </span>
        </div>

        <br/>
        <a> Click to Sign in Button</a>
      </div>
    </DefaultLayout>
  )
}
