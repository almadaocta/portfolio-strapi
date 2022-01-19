const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'ec2-3-216-113-109.compute-1.amazonaws.com',
      port: '5432',
      database: 'd5mbmk608urdaq',
      user: 'egpgyjjcdmcueg',
      password: '259f2b2a8fe6db1d60a2f3191a81b621126038b4676b80215a98443381b2589c',
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
 