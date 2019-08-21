/* eslint-disable import/prefer-default-export */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import { Anchor, Image } from './styles';

const DEFAULT_IMG = 'https://images.pexels.com/photos/1035591/pexels-photo-1035591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

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
