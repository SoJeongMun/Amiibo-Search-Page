import { useState, useEffect, useMemo } from "react";
import Card from '../components/Card';

function Home() {
    const [amiibo, setAmiibo] = useState([]);
    const [search, setSearch] = useState('');
    
    const getAmiibo = async () => {
        const res = await(
            await fetch('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Animal%20Crossing&type=card')
        ).json();
        setAmiibo(res.amiibo)
    };
    useEffect(() => {
        getAmiibo();
    }, []);
    
    const filterAmiibo = useMemo(() => {
        return amiibo.filter((update) => update.release.jp === '2015-07-30')
    }, [amiibo])

    const searching = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setSearch(e.target.value)
    }

    return (
        <div className="main">
            <div className="cont">
                <form>
                    <input type='text' placeholder='검색어를 입력해주세요.' value={ search } onChange={ searching } />
                    <button type='submit'>search</button>
                </form>
                {filterAmiibo.map((v) => (
                    <Card card={v} />
                ))}
            </div>
        </div>
    )
};
export default Home;