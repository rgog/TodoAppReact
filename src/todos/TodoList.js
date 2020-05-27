import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { completeTodo } from './actions';
import './TodoList.css';
import {displayAlert} from "./thunks"
import {loadTodos, removeTodoRequest, completeTodoRequest } from './thunks'

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed,  isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, [])

    const loadingMessage = <div>Loading Todos...</div>
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} 
            onCompletePressed = { onCompletePressed }/>)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: uniqueID => dispatch(removeTodoRequest(uniqueID)),
    onCompletePressed: uniqueID => dispatch(completeTodoRequest(uniqueID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);