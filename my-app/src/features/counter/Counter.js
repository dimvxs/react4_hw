import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
  incrementIfOdd,
  decrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [decrementAmount, setDecrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  const decrementValue = Number(decrementAmount) || 0;
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>

        <button
          className={styles.button}
          onClick={() => dispatch(decrementIfOdd(decrementValue))}
        >
          Delete If Odd
        </button>

        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(decrementValue))}
        >
          Delete amount
        </button>
        <input
          className={styles.textbox}
          aria-label="Set decrement amount"
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
        />
      </div>
    </div>
  );
}
