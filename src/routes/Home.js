import { useState, useEffect, useMemo } from 'react';
import AmiiboCard from '../components/AmiiboCard';
import Style from '../Style.scss';

function Home() {
	const [amiibo, setAmiibo] = useState([]);
	const [loading, setLoading] = useState(true);
	// const [cardModal, setCardModal] = useState(false);

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
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getAmiibo();
	}, []);

	const filterAmiibos = useMemo(() => {
		return (
			amiibo
				.filter((update) => update.release.jp === '2015-07-30')
				// .map((element) => {
				// 	return { name: element.name, image: element.image };
				// });
				.map(({ name, image, tail }) => ({ name, image, tail }))
		);
	}, [amiibo]);

	// const getCardModal = (cardModal) => {
	// 	setCardModal(cardModal);
	// };

	return (
		<div className="main">
			{/* {cardModal === true ? <CardModal image={filterAmiibos.image} /> : null} */}
			<div className="contents">
				{loading ? 'Loading...' : <AmiiboCard filterAmiibos={filterAmiibos} />}
			</div>
		</div>
	);
}

// function CardModal({image}) {
// 	return (
// 		<div className='card-modal'>
// 			<img src={image} alt="amiiboCard" />
// 		</div>
// 	)
// }

export default Home;
