import React from 'react';
import { FeedbackButton } from './FeedbackBtns.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  icon: Icon = null,
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <FeedbackButton type={type} onClick={onClick}>
      {Icon && <Icon size="14" />}
      {children}
    </FeedbackButton>
  );
};

BtnFeedback.propTypes = {
  icon: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
