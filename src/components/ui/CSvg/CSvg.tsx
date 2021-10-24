import React, { CSSProperties } from 'react';

import icons from '../../../assets/icons';

import CSvgView from './CSvg.view';

interface Props {
  readonly name: keyof typeof icons;
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly onClick?: () => void;
}

const CSvg: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <CSvgView
      style={props.style}
      className={props.className}
      name={props.name}
      onClick={props.onClick}
    >{props.children}</CSvgView>
  );
};

CSvg.displayName = 'CSvg';
CSvg.defaultProps = {};

export default React.memo(CSvg);
