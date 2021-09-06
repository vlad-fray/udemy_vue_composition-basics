const addPost = (post) => {
  const error = null;

  const load = async () => {
    try {
      const data = await fetch('http://localhost:3000/posts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });
      if (!data.ok) {
        throw Error('Adding post is failed');
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, load };
};

export default addPost;

// {
//     "posts": [
//       {
//         "id": 1,
//         "title": "welcome to the new blog",
//         "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         "tags": ["webdev", "coding", "news"]
//       },
//       {
//         "id": 2,
//         "title": "top 5 CSS tips",
//         "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         "tags": ["css", "webdev", "coding"]
//       }
//     ]
//   }
