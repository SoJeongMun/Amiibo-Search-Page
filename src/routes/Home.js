import { useState, useEffect } from "react";

function Home() {
    const [amiibo, setAmiibo] = useState([]);
    const getAmiibo = async () => {
        const res = await(
            await fetch('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Animal%20Crossing&type=card')
        ).json();
        setAmiibo(res.amiibo)
    };
    useEffect(() => {
        getAmiibo();
    }, []);
    return (
        <div className="main">
            <div className="cont">
                {amiibo.filter((update) => update.release.jp === '2015-07-30').map((v) => (
                    <div>
                        <p className="title">{v.name}</p>
                        <img src={v.image} alt='card' />
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Home;