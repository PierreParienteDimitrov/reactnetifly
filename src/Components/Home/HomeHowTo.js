import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkoogWorks from '../../images/skoog-works.png';
import { HowSkoogWorks } from '../../Utils/Content/HowSkoogWorks';
import { Table } from '../Table';
import { isXs } from '../../Utils/MediaQueries';

export const HomeHowTo = () => {
	return (
		<Container
			style={
				isXs.matches
					? { width: '90%', padding: '8rem 0' }
					: { width: '70%', padding: '14rem 0' }
			}
		>
			<Row style={{ alignItems: 'center' }}>
				<Col sm={12} lg={6}>
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							marginBottom: '4rem',
						}}
					>
						<img src={SkoogWorks} alt='' width='70%' />
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<h5>HOW SKOOG WORKS</h5>
					<br />
					<br />
					{HowSkoogWorks.map((el, index) => {
						return (
							<>
								<Table number={el.number} how={el.how} key={index} />
							</>
						);
					})}
				</Col>
			</Row>
		</Container>
	);
};
