import React, { useEffect,useState } from "react";
import Router from 'next/router'
export default function MyPage () {
    const [loaded,setLoaded] = useState(false)
    useEffect(() => {
        const {pathname} = Router
        // conditional redirect
        if(pathname == '/' ){
            // with router.push the page may be added to history
            // the browser on history back will  go back to this page and then forward again to the redirected page
            // you can prevent this behaviour using location.replace
            Router.push('/blackboard')
           //location.replace("/hello-nextjs")
        }else{
            setLoaded(true)
        }
      },[]);

    if(!loaded){
        return <div></div> //show nothing or a loader
    }
    return ( 
        <p>
            You will see this page only if pathname !== / <br/>
        </p>
    )
}
