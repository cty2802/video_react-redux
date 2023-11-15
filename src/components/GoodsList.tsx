import React, { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { useDispatch } from 'react-redux';
import { actions as goodsActions } from '../features/goods';

export const GoodsList = () => {
  const [newGood, setNewGood] = useState('');
  const dispatch = useDispatch();
  const goods = useAppSelector(state => state.goods);

  const addGood = (goodToAdd: string) => dispatch(goodsActions.add(goodToAdd));

  const removeGood = (goodToRemove: string) => dispatch(goodsActions.take(goodToRemove));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!newGood) {
      return;
    }

    addGood(newGood);
    setNewGood('');
  };

  return (
    <section className="goods">
      <h2>Goods:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newGood}
          onChange={e => setNewGood(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {goods.map(good => (
          <li key={good}>
            <button
              onClick={() => removeGood(good)} 
              className="delete"
            />

            {good}
          </li>
        ))}
      </ul>
    </section>
  );
};
