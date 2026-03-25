const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(datePosted) {
  const postedDate = new Date(datePosted);
  const todayDate = new Date();

  if (isNaN(postedDate.getTime())) return;

  const convertedPostedDate = postedDate.getTime();
  const convertedTodayDate = todayDate.getTime();

  const timeAgoDate = (convertedTodayDate - convertedPostedDate) / 1000;

  let interval = timeAgoDate / 86400;
  if (interval >= 1) return Math.floor(interval) + "d ago";

  interval = timeAgoDate / 3600;
  if (interval >= 1) return Math.floor(interval) + "h ago";

  interval = timeAgoDate / 60;
  if (interval >= 1) return Math.floor(interval) + "m ago";

  return `Just now`;
}

function viewCount(viewsNumber) {
  if(viewsNumber >= 1000) return `${Math.floor(viewsNumber / 1000)}k`;
  return viewsNumber;
}

function forumCategory(id) {
  let category = {};
  if(!Object.keys(allCategories).includes(String(id))) {
    category = {
      category: `General`,
      className: `general`,
    }
  } else {
      category = allCategories[id];
  };

  return `<a class="category ${category.className}" href="${forumCategoryUrl}${category.className}/${id}">${category.category}</a>`;
}

function avatars(posters, users) {
  if (!Array.isArray(posters) || !Array.isArray(users)) return "";

  return posters.map(poster => {
    const user = users.find(u => u.id === poster.user_id);
    if(!user) return "";

    let src = user.avatar_template.replace("{size}", "30");
    if(src.startsWith("/")) src = `${avatarUrl}${src}`;

    return `<img src="${src}" alt="${user.name}" />`
  }).join("");
}

function showLatestPosts(posts) {
  const {users, topic_list} = posts;

  const processedTopics = topic_list.topics.map(topic => ({
    id: topic.id,
    title: topic.title,
    views: topic.views,
    posts_count: topic.posts_count,
    slug: topic.slug,
    posters: topic.posters,
    category_id: topic.category_id,
    bumped_at: new Date(topic.bumped_at).toISOString()
  }));

  const trElements = processedTopics.map(topic => {
    return `
    <tr>
      <td>
        <a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">${topic.title}</a>
        ${forumCategory(topic.category_id)}
      </td>
      <td>
        <div class="avatar-container">${avatars(topic.posters, users)}</div>
      </td>
      <td>
        ${topic.posts_count - 1}
      </td>
      <td>
        ${topic.views}
      </td>
      <td>
        ${timeAgo(topic.bumped_at)}
      </td>
    </tr>`
  })

  document.getElementById("posts-container").innerHTML = trElements;
}

async function fetchData() {
  await fetch(forumLatest)
    .then(data => data.json())
    .then(data => showLatestPosts(data))
    .catch(error => console.error('Caught error outside:', error));
}

console.log(timeAgo(new Date("2025-12-17T03:24:00")));
console.log(viewCount(10000));
console.log(forumCategory(560));
console.log(fetchData());