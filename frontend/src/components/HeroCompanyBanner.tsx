const HeroCompanyBanner = ()=>{
        return(
            <div className="hero_company_banner flex flex-col mt-8 mb-4">
                
                <div className="uppercase text-5xl mb-4">
                    We are trusted by leading brands and startups. 
                </div>

                    <div className="border border-black flex flex-row justify-between bg-[#DAF7A6] px-4 mt-4">
                        <div>
                            <img src="/svg/amazon.svg" alt="Google" />
                        </div>
                        <div>
                            <img src="/svg/netflix.svg" alt="Google" />
                        </div>
                        <div>
                            <img src="/svg/adobe.svg" alt="Google" />
                        </div>
                        <div>
                            <img src="/svg/google.svg" alt="Google" />
                        </div>
                        <div>
                            <img src="/svg/hp.svg" alt="Google" />
                        </div>
                        <div>
                            <img src="/svg/microsoft.svg" alt="Google" />
                        </div>
                        <div>
                            <img src="/svg/nvidia.svg" alt="Google" />
                        </div>
                        <div>
                            <img src="/svg/oracle.svg" alt="Google" />
                        </div>
                    </div>
            </div>
        );
}
export default HeroCompanyBanner;