import * as React from 'react'
import { useState } from 'react';
import { JSXElement } from '@babel/types';

interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}


export const Counter: React.FC<Props> = ({children}) => {
		const [count, setCount] = useState(0)
		return (
			<div>
				{children({count, setCount})}
			</div>
		);
}