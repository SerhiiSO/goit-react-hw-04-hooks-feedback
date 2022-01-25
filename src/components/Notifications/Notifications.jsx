import React from 'react';
import { Message } from './Notifications.styled';

export default function Notifications({ message }) {
  return <Message>{message}</Message>;
}
