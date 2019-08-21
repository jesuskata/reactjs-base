/* eslint-disable import/prefer-default-export */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import { Anchor, Image } from './styles';

const DEFAULT_IMG = 'http://bit.ly/2P2tFez';

export const FirstStyled = ({ cover = DEFAULT_IMG, path }) => (
  <Anchor href={path} target="_blank">
    <Image src={cover} alt="hello" />
    This is a simple Hello World base ReactJS app ✋
  </Anchor>
);

FirstStyled.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string
};

FirstStyled.defaultProps = {
  cover: DEFAULT_IMG,
  path: ''
};
