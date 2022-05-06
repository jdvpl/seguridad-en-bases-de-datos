
import React from 'react';

const Message = ({mensaje,color}) => (
    <p className={`alert alert-${color} error text-center fw-bold mt-3`}>{mensaje}</p>
  );

export default Message;