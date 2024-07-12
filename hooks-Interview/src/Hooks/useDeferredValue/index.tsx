import React, { useDeferredValue, useEffect, useState } from "react";
import SlowList from "./SlowList";

export default function DeferredValue(){
    const[query,setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

    // See the working of deferred value there is an  extra re-render at the end which is cause by  useDeferredValue hook when 
    // we stop giving input until then the deferredQuery value is same as of last render (render rendered by useDeferredValue)

/*     useEffect(()=>{
        console.log('Query :-', query);
        console.log('Deferred Query :-', deferredQuery);
        console.log('---End of query---');
    },[query , deferredQuery]) */
    

    return(
        <>
        <div>
            <input 
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="search..."
            />
            <SlowList text={deferredQuery} />
        </div>
        </>
    )
}