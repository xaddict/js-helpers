import MemoizedFetch from './MemoizedFetch.js';

export default class MemoizedPosts extends MemoizedFetch {
  slug = 'posts';
  url = 'https://jsonplaceholder.typicode.com/posts';
}
