import {Card, Checkbox, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@mui/material"
import React, {useState} from "react"
import {Clear, Create} from "@mui/icons-material"
import {Todo} from "@/components/Todo"

interface inputProps {
    todos: Todo[];
}
export default function TodoList({todos}:inputProps) {

    return (
        <Card>
            <List>
                {
                    todos.map((todo) => {
                        return (
                            <ListItem role="listitem" button>
                                <ListItemIcon>
                                    <Checkbox tabIndex={-1} disableRipple />
                                </ListItemIcon>
                                <ListItemText>{todo.val}</ListItemText>
                                <IconButton color="secondary" aria-label="Delete">
                                    <Create fontSize="small" />
                                </IconButton>
                                <IconButton color="secondary" aria-label="Delete">
                                    <Clear fontSize="small" />
                                </IconButton>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Card>
    )
}