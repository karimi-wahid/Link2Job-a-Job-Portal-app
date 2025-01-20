import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";


const AppContext = createContext()


export const AppContextProvider = ({children}) => {
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: '',
    })

    const [isSearched, setIsSearched] = useState(false)
    const [jobs, setJobs] = useState([])

    // Function to fetch jobs data
    const fetchJobs = async ()=> {
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    },[])

    const value = {
        searchFilter, setSearchFilter,
        isSearched, setIsSearched,
        jobs, setJobs
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContext