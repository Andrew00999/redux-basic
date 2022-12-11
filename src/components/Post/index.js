import React from 'react';
import { Card, Button } from 'antd';

export const Post = ({ title, body, id, deletePost }) => (
  <Card
    hoverable
  >
    <h1>{title}</h1>
    <p>{body}</p>
    <Button onClick={() => deletePost(id)} type="primary">Delete</Button>
  </Card>
)