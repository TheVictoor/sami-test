module.exports = ({ MongoClient, config }) => {
  const locals = {};
  const connect = async () => {
    if (locals.conn) return locals.conn;
    locals.conn = await MongoClient.connect(config.database.connectionString, {
      useUnifiedTopology: true,
    });
    return locals.conn;
  };

  return {
    async getDb(dbname) {
      const conn = await connect();
      return conn.db(dbname);
    },
  };
};
