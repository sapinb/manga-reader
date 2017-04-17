import React from 'react';
import classnames from 'classnames';

type Props = {
  name: string
};

const FAIcon = ({ name }: Props) => (
  <span className={classnames('fa', name)} />
);

export default FAIcon;
