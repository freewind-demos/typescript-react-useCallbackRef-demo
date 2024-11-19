import React, { FC } from 'react';
import './Hello.pcss';
import { InputDemo } from './InputDemo';
import { InputDemo2 } from './InputDemo2';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div className={'Hello'}>
    <div>
      <div>使用 useCallbackRef</div>
      <InputDemo />
    </div>
    <hr />
    <div>
      <div>使用 useRef/useState/useEffect</div>
      <InputDemo2 />
    </div>
  </div>;
}
