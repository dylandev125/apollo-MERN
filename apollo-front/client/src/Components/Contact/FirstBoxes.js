import React, { Fragment } from 'react';
import { Grid } from '@mui/material';

const FirstBoxes = ({ boxone }) => {
	return (
		<div className='contact-box white-bg'>
			<section>
				<Grid container spacing={4} alignItems='center' justifyContent='center'>
					{boxone.eimg !== 'uploads/big-placeholder.jpg' && (
						<Fragment>
							<Grid item xs={12} sm={12} md={3}>
								<div className='con-intro-container'>
									<div className='image-container'>
										<img
											src={`http://localhost:5079/${boxone.eimg}`}
											alt={boxone.etitle}
										/>
									</div>
								</div>
							</Grid>
							<Grid item xs={12} sm={12} md={1}>
								<div className='blue-separator'></div>
							</Grid>
						</Fragment>
					)}
					<Grid item xs={12} sm={12} md={8}>
						<div className='con-intro-container'>
							<h4>{boxone.etitle}</h4>
							<div
								className='extrabox-content'
								dangerouslySetInnerHTML={{
									__html:
										boxone.econtent &&
										boxone.econtent
											.replace(/Distec/gi, 'Apollo Display Technologies')
											.replace(/GmbH/g, ''),
								}}
							></div>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default FirstBoxes;
