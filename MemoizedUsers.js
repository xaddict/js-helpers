import MemoizedFetch from './MemoizedFetch.js';

export default class MemoizedUsers extends MemoizedFetch {
  slug = 'users';
  url = 'https://jsonplaceholder.typicode.com/users';
}
