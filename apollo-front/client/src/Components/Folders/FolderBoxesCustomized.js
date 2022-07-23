import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const FolderBoxesCustomized = ({ boxes }) => {
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
		<div className='corporate-philo-block folder-extra-content'>
			<section>
				<Grid container spacing={4} justifyContent='center'>
					{finalBoxes.length > 0 &&
						finalBoxes.map((bx) => (
							<Grid key={bx._id} item xs={12} sm={6} md={3}>
								<div className='nl-intro-container'>
									<div className='nl-intro-container'>
										<h3>{bx.etitle}</h3>
									</div>
									<div
										className='extrabox-content'
										dangerouslySetInnerHTML={{
											__html: bx.econtent,
										}}
									></div>
								</div>
							</Grid>
						))}
				</Grid>
			</section>
		</div>
	);
};

export default FolderBoxesCustomized;
