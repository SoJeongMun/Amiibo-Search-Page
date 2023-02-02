import { useMemo, useState } from 'react';

function AmiiboCard({ filterAmiibos }) {
	const [search, setSearch] = useState('');
	const onChangeSearch = (e) => {
		setSearch(e.target.value);
	};

	const searched = useMemo(
		() =>
			filterAmiibos.filter((el) => el.name?.match(new RegExp(search, 'gi'))),
		[filterAmiibos, search]
	);

	const deleteInput = () => {
		setSearch('');
	};

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
						<img src={amiibo.image} alt="amiiboCard" />
					</div>
				);
			})}
		</div>
	);
}

export default AmiiboCard;
