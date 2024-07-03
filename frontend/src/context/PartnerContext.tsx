import { createContext, useEffect, useState } from "react";

const PartnersContext = createContext()

const PartnersContextProvider = ({children}) => {

    const [partners,setPartners] = useState([{}]);

    useEffect(()=>{
        setPartners(
            [
                {
                    id: 1,
                    name: 'Amazon',
                    url: 'www.amazon.com',
                    starting_partnership_date: '01/01/2001'
                },

                {
                    id: 2,
                    name: 'eBay',
                    url: 'www.ebay.com',
                    starting_partnership_date: '01/01/2001'
                },

                {
                    id: 3,
                    name: 'aliexpress',
                    url: 'best.aliexpress.com/',
                    starting_partnership_date: '01/01/2001'
                },

                {
                    id: 4,
                    name: 'mercandu',
                    url: 'mercandu.com/',
                    starting_partnership_date: '01/01/2001'
                },
            ]
        )
    },[]);

    return (
        <PartnersContext.Provider value={partners}>
            {children}
        </PartnersContext.Provider>
    )

}

export { PartnersContext, PartnersContextProvider }