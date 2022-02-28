import Image from 'next/image'

function Footer() {
    return (
        <footer>
            <div className="bg-gray-800 px-4 py-9 md:px-6 md:py-12 lg:px-20 lg:py-12">
                <div className="flex flex-col xl:flex-row justify-between">
                    <div className="flex flex-col md:gap-10">
                        <div className="flex items-start w-full">
                            <div className="pb-10 md:pb-0">
                                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Product</h3>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Email Marketing</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Website Builder</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Market Automation</p>
                            </div>
                            <div className="pb-10 md:pb-0 2xl:pl-20 pl-16">
                                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Support</h3>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Generate lead</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Size Guide</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Shipping</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Payment Security</p>
                            </div>
                            <div className="pb-10 md:pb-0 2xl:pl-20 pl-16 md:block hidden">
                                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Solutions</h3>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Generate Lead</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Self knowledge</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Work from home</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Engage customers</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Boost online sales</p>
                            </div>
                            <div className="pb-10 md:pb-0 2xl:pl-20 pl-16 md:block hidden">
                                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Visit us</h3>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Mayfair</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Melbourne</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Wimbledon</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="pb-10 md:pb-0 md:hidden">
                                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Solutions</h3>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Generate Lead</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Self knowledge</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Work from home</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Engage customers</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Boost online sales</p>
                            </div>
                            <div className="pb-10 md:pb-0 pl-16 md:hidden">
                                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Visit us</h3>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Mayfair</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Melbourne</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Wimbledon</p>
                            </div>
                        </div>
                        <div className="flex items-start w-full">
                            <div className="pb-10 md:pb-0">
                                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Pricing</h3>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Integration</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Affiliate program</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Agency Partner</p>
                            </div>
                            <div className="pb-10 md:pb-0 2xl:pl-20 pl-16">
                                <h3 className="text-xl cursor-default font-semibold leading-tight text-white pb-8">Entreprenuer</h3>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Online Marketer</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Marketing Manager</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Mid and large companies</p>
                            </div>
                            <div className="2xl:pl-20 md:pl-16 md:block hidden">
                                <h3 className="text-xl cursor-default font-semibold leading-tight text-white pb-8">About Getresponce</h3>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Career</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Api docs</p>
                                <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Accessibility</p>
                            </div>
                        </div>
                        <div className="2xl:pl-20 md:pl-16 md:hidden">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white pb-8">About Getresponce</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Career</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Api docs</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 pb-6">Accessibility</p>
                        </div>
                    </div>

                    <div className="pt-16 md:pt-12 lg:pt-0">
                        <h3 className="text-xl font-semibold leading-tight text-white">Blog</h3>
                        <div className="pt-8 mb-6 flex justify-center cursor-pointer items-center flex-col md:flex-row md:justify-start gap-6">
                            <img className="hidden lg:block" src="https://i.ibb.co/qYT5Rfg/Rectangle-93.png" alt="a workspace" />
                            <img className="block lg:hidden" src="https://i.ibb.co/FxNmTwC/Rectangle-93-1.png" alt="a workspace" />
                            <p className="text-center md:text-left text-base font-semibold cursor-pointer leading-normal text-gray-100">Email Marketing for beginners</p>
                        </div>
                        <div className="mb-6 flex justify-center cursor-pointer items-center flex-col md:flex-row md:justify-start gap-6">
                            <img className="hidden lg:block" src="https://i.ibb.co/z88NZGh/Rectangle-94.png" alt="a woman" />
                            <img className="block lg:hidden" src="https://i.ibb.co/pnbjk3y/Rectangle-93-2.png" alt="a woman" />
                            <p className="text-center md:text-left text-base font-semibold cursor-pointer leading-normal text-gray-100">Essential guide for dress</p>
                        </div>
                        <div className="mb-6 flex justify-center cursor-pointer items-center flex-col md:flex-row md:justify-start gap-6">
                            <img className="hidden lg:block" src="https://i.ibb.co/vZYLsMs/Rectangle-95.png" alt="a workspace" />
                            <img className="block lg:hidden" src="https://i.ibb.co/qpCrNwx/Rectangle-93-3.png" alt="a workspace" />
                            <p className="text-center md:text-left text-base font-semibold leading-normal text-gray-100">Essential guide for landing pages</p>
                        </div>
                        <div className="flex items-center md:justify-start justify-center">
                            <button className=" pt-8 hover:underline text-base font-medium leading-none text-white cursor-pointer">View all posts</button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 lg:pt-24 flex justify-center md:justify-start gap-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="5" width="18" height="14" rx="4" />
                        <path d="M10 9l5 3l-5 3z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-pinterest" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="8" y1="20" x2="12" y2="11" />
                        <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                        <circle cx="12" cy="12" r="9" />
                    </svg>
                </div>
            </div>
        </footer>
    )
}

export default Footer;