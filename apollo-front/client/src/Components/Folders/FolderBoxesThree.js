import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FolderBoxesThree = ({ boxes }) => {
	const [finalBoxes, setFinalBoxes] = useState([]);
	const restofBoxes = boxes && boxes.slice(0, 4);

	useEffect(() => {
		setFinalBoxes([]);

		restofBoxes.forEach((el) => {
			if (el.eimg && el.img !== 'uploads/big-placeholder.jpg') {
				let image = new Image();
				image.src = `http://localhost:5079/${el.eimg}`;
				image.onload = () => {
					setFinalBoxes((finalBoxes) => [
						...finalBoxes,
						{
							_id: el._id,
							eposition: el.eposition,
							etitle: el.etitle,
							econtent: el.econtent,
							src: image.src,
							width: image.width,
							height: image.height,
						},
					]);
				};
			} else {
				setFinalBoxes((finalBoxes) => [
					...finalBoxes,
					{
						_id: el._id,
						eposition: el.eposition,
						etitle: el.etitle,
						econtent: el.econtent,
					},
				]);
			}
		});

		// eslint-disable-next-line
	}, [boxes]);

	return (
		<div className='folder-extra-content blue-bg'>
			<section>
				<Grid container spacing={4} justifyContent='center'>
					{finalBoxes.length > 0 &&
						finalBoxes.map((bx) => (
							<Grid key={bx._id} item xs={12} sm={6} lg={4}>
								<Link
									to={`/products/embedded-accessories-products/${
										bx.etitle.startsWith('Flash')
											? 'flash-memory-products'
											: bx.etitle.startsWith('Extension')
											? 'extension-cards'
											: 'windows-iot'
									}`}
									className='extraboxes-links'
								>
									{bx.src && (
										<div className='image-container'>
											<img
												src={bx.src}
												alt={bx.etitle}
												width={bx.width}
												height={bx.height}
											/>
										</div>
									)}
									<div className='nl-intro-container'>
										<h3>{bx.etitle}</h3>
									</div>
									<div
										className='extrabox-content'
										dangerouslySetInnerHTML={{
											__html: bx.econtent,
										}}
									></div>
								</Link>
							</Grid>
						))}
				</Grid>
			</section>
		</div>
	);
};

export default FolderBoxesThree;
