import Head from 'next/head'
import Header from '/components/header/header';
import Footer from '/components/footer/footer';

function DefaultLayout({children , layoutInfo}) {
    return (
        <>
            {/* <Sidebar /> */}
            
            <div className="container mx-auto px-4">
                {/* Title & MetaData */}
                <Head>
                    <title> {layoutInfo.title} </title>
                    <meta name="description" content={layoutInfo.description}/>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
    
                {/* Header */}
                <Header/>
    
                <main className="min-h-screen">
                    {children}
                </main>
    
                {/* Footer */}
                <Footer/>
            </div>
        </>
    )
}

export default DefaultLayout;