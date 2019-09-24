import React, {useReducer} from 'react';
import { type } from 'os';

type Actions =
	| {type: 'add'; text: string}
	| {
		type: 'remove';
		idx: number;
	}

interface Todo {
	text: string;
	complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
	switch (action.type) {
		case 'add':
			return [...state, {text: action.text, complete: false}]
		case 'remove':
			return state.filter((_, i) => action.idx !== i)
		default:
			return state;
	}
}

export const ReducerExample: React.FC = () => {
	const [todos, dispatch] = useReducer(TodoReducer, [], init)

	return (
		<div>
			{JSON.stringify(todos)}
			<button onClick={() => {
				dispatch({type:'add', text:'tesxxx'})
				// dispatch({type: 'remove', idx:{5}})
				// todos[0]
			}
			} />
		</div>
	);
};

export default ReducerExample;