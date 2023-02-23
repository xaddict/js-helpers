// Import stylesheets
import './style.css';

import MemoizedPosts from './MemoizedPosts.js';
import MemoizedUsers from './MemoizedUsers.js';

const memoizedPosts = new MemoizedPosts();
const memoizedUsers = new MemoizedUsers();

async function getStuff() {
  const post1 = await memoizedPosts.get(0);
  let newDiv = document.createElement('div');
  newDiv.innerHTML = post1.title;
  document.body.appendChild(newDiv);

  const user1 = await memoizedUsers.get(0);
  let newDiv2 = document.createElement('div');
  newDiv2.innerHTML = user1.name;
  document.body.appendChild(newDiv2);
}

// setInterval(getStuff, 10_000);
