'use client';
import { Button } from '@/components/ui/button';
import { useContext, createContext, useState } from 'react';

const Store = createContext(0);

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-screen h-screen grid place-content-center gap-y-4 text-center'>
      <Store.Provider value={count}>
        <Child />
        <div className='flex gap-x-4'>
          <Button
            className='text-2xl px-4 py-2 bg-green-400'
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <Button
            className='text-2xl px-4 py-2 bg-red-400'
            onClick={() => (count === 0 ? null : setCount(count - 1))}
          >
            -
          </Button>
        </div>
      </Store.Provider>
    </div>
  );
}

function Child() {
  const value = useContext(Store);
  return <div className='text-3xl'>{value}</div>;
}
