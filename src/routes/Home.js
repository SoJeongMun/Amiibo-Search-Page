import { useState, useEffect, useMemo } from 'react';
import AmiiboCard from '../components/AmiiboCard';

function Home() {
	const [amiibo, setAmiibo] = useState([]);
	const [search, setSearch] = useState('');

	const getAmiibo = async () => {
		try {
			const res = await (
				await fetch(
					'https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Animal%20Crossing&type=card'
				)
			).json();
			setAmiibo(res.amiibo);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getAmiibo();
	}, []);

	const filterAmiibo = useMemo(() => {
		return amiibo.filter((update) => update.release.jp === '2015-07-30');
	}, [amiibo]);

	const userInput = (e) => {
		setSearch(e.target.value);
	};
	const searching = filterAmiibo.filter((el) => {
		return el.name.match(new RegExp(userInput, 'gi'));
	});

	return (
		<div className="main">
			<div className="contents">
				<input
					type="text"
					placeholder="검색어를 입력해주세요."
					value={search}
					onChange={userInput}
				/>
				{filterAmiibo.map((v) => (
					<AmiiboCard key={v.tail} {...v} />
				))}
			</div>
		</div>
	);
}

export default Home;
