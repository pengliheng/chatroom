const axios = require('axios');

const Graphql = async (ctx) => {
  const query = ctx.request.body;
  const queryFunc = async data => new Promise((resolve, reject) => {
    axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      headers: {
        Authorization: `bearer ${process.env.access_token}`,
        'Content-Type': 'application/json',
      },
      data,
    })
      .then((res) => {
        resolve({
          code: 200,
          data: res.data,
        });
      }, (err) => {
        console.log(err);
        console.log(process.env.access_token);
        reject(err);
      });
  });
  ctx.body = await queryFunc(query);
};

module.exports = Graphql;
