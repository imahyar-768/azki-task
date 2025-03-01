import {Suspense} from 'react';
import LoginContainer from '@/containers/login';

export default function Login() {
  return (
    <Suspense>
      <LoginContainer />
    </Suspense>
  );
}
