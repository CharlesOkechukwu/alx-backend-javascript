import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([body, name]) => console.log(`${body.body} ${name.firstName} ${name.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
