/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import React, { Suspense } from 'react';
import Loading from '../Loading';

interface HelloWorldProps {
  title: string;
}

interface HelloWorldState {
  time: string;
}

export default class HelloWorld extends React.Component<
  HelloWorldProps,
  HelloWorldState
> {
  constructor(props: any) {
    super(props);
    this.changeTime();
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  changeTime() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleString() });
    }, 1000);
  }

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <div className='flex gap-2'>
          <time>{this.state.time}</time>
        </div>
      </Suspense>
    );
  }
}
