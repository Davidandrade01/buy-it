
export const setItem=(key, value)=>{
    
    localStorage.setItem(key,JSON.stringify(value))
}

export const getItem=(key)=>{
    if (typeof window === "undefined") return null
    else{
        return JSON.parse(localStorage.getItem(key))   
    } 
}