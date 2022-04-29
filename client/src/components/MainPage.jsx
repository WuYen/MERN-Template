import React, { useEffect } from 'react';
import api from '../utilities/api';

export default function MainPage(props) {
  useEffect(() => {
    api.get('/sample').then((x) => {
      console.log('test-', x);
    });
  }, []);
  return <div>hello world</div>;
}
