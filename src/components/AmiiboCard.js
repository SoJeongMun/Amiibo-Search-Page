import { useMemo, useState } from 'react';

function AmiiboCard({ filterAmiibos }) {
	const [search, setSearch] = useState('');
	const [cardModal, setCardModal] = useState(false);

	const onChangeSearch = (e) => {
		setSearch(e.target.value);
	};
	const searched = useMemo(
		() =>
			filterAmiibos.filter((elements) => elements.name?.match(new RegExp(search, 'gi'))),
		[filterAmiibos, search]
	);
	const deleteInput = () => {
		setSearch('');
	};

	const openModal = () => {
		setCardModal(!cardModal)
	}
	// const openModal = () => {
	// 	getCardModal(!cardModal)
	// };

	return (
		<div className="container">
			<input
				type="text"
				placeholder="검색어를 입력해주세요."
				value={search}
				onChange={onChangeSearch}
				/>
			{search.length > 0 ? (
				<button className="delete-btn" onClick={deleteInput}>
					X
				</button>
			) : null}

			{searched.map((amiibo) => {
				return (
					<div key={amiibo.tail}>
						<p className="title">{amiibo.name}</p>
						<img src={amiibo.image} alt="amiiboCard" onClick={openModal} />
						{cardModal === true ? <CardModal image={amiibo.image} /> : null}
						{/* TODO : 클릭한 이미지의 모달만 열리게 만들기 */}
					</div>
				);
			})}

		</div>
	);
}

function CardModal({image}) {
	return (
		<div className='card-modal'>
			<img src={image} alt="amiiboCard" />
		</div>
	)
}

export default AmiiboCard;
