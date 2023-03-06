import { Icon, InputLabel, List, ListItem, Typography } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle,
}) => {
  if (todos.length === 0) {
    return <p className="center">Пока дел нет!</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <List>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <ListItem key={todo.id}>
            <InputLabel sx={{ display: "flex" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <Typography sx={{ mx: "5px" }}>{todo.title}</Typography>
              <Icon
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, todo.id)}
              >
                <FaRegTrashAlt />
              </Icon>
            </InputLabel>
          </ListItem>
        );
      })}
    </List>
  );
};
