import React from 'react'
import { Grid } from '@material-ui/core'
import Item from './item'

function list(props) {
    console.log(props)
    return (
        <Grid container justify='space-between'>
            {
                props.films.map(film =>(
                    <Item key = {film.id} film = {film}/>
                ))
            }
        </Grid>
    )
}

export default list
