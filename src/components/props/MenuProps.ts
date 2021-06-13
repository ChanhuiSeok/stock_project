import {MouseEventHandler} from 'react';

export interface MenuProps {
  name: string;
  selected?: boolean;
  onClick: MouseEventHandler<HTMLLIElement>;
}
