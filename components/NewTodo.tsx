import {Box, Button, Grid, TextField} from "@mui/material"
import React, {ChangeEvent} from "react"
interface InputProps {
    onChange(e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
    input: String
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}
export default function NewTodo({onChange, onClick, input}:InputProps) {
    return (
        <Grid container>
            <Grid item>
                <TextField
                    label="New Todo"
                    variant="outlined"
                    value={input}
                    onChange={event => {onChange(event)}}
                />
            </Grid>
            <Grid item alignItems="stretch" style={{ display: "flex" }}>
                <Button color="secondary" variant="contained" onClick={event => {
                    onClick(event)
                }}>
                    add
                </Button>
            </Grid>
        </Grid>
    )
}