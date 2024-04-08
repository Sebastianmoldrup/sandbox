'use client';


import type { RootState } from './utils/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './utils/redux/features/counter/counterSlice';
import Link from 'next/link';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="grid align-middle content-center gap-y-4 text-center">
      <Link href="/redux">Redux</Link>
    </main>
  )
}