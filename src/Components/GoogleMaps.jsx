import { useEffect } from "react";

function GoogleMaps(){
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=-32.685300;
        const lon=-58.882400;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div className="ml-2">
            <iframe id="iframeId" height="200px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMaps;
