import { useEffect } from "react";

export default function TestUseEffectAwait({ id }) {

    useEffect(() => {
        // Create an async function...
        async function runEffect() {
            const url = `/get-profile?id=${id}`;
            
            const res = await fetch(url);
            const json = await res.json();

            console.log(json)
            // setUser(json);
        }
        // ...and then invoke it:
        runEffect();
    }, [id]);

    return <div>123</div>
}