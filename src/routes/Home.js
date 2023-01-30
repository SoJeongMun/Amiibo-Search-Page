import { useState, useEffect } from "react";

function Home() {
    const [amiibo, setAmiibo] = useState([]);
    const getAmiibo = async () => {
        const res = await(
            await fetch('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super%20Smash%20Bros.')
        ).json();
        setAmiibo(res.amiibo)
    };
    useEffect(() => {
        getAmiibo();
    }, []);
    console.log(amiibo);
};
export default Home;