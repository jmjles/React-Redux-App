import React from 'react'
import { Grid, Card, Paper, Typography as Font } from '@material-ui/core'

function item({film:{title,rt_score,release_date,description}}) {
    const style = {
        height:'400px',
        margin:'2rem',
    }
    return (
        <Grid item xs = {3} sm = {4}>
            <Card elevation={5} style={style}>
                <Paper elevation={0} style={{padding:'1rem'}}>
                    <Font variant='h5' align='center'>
                        {title}
                    </Font>
                    <Font variant='h2' align='center'>
                        Score: {rt_score}
                    </Font>
                    <Font variant='body1'>
                        {description}
                    </Font>
                    <hr/>
                    <Font variant='body2'>
                        {release_date}
                    </Font>
                </Paper>
            </Card>
        </Grid>
    )
}

export default item