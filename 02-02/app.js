const axios = require('axios');

const main = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    posts.forEach(post => {
      console.log(post.id);
    })

  } catch(e) {
    console.log('Tidak dapat mengambil data.');
  }
};

(async () => await main())();