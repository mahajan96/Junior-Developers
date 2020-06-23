import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

function Jobs({ jobs }) {
	return (
		<div className={'jobs'}>
			<Typography variant='h2'>
				Entry level Software Jobs !!
			</Typography>
			{
				jobs.map(job => <Job job={job} />)
			}

		</div>

	);
}

export default Jobs;