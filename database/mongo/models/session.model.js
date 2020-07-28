
module.exports = ({ connection, mongoose } = {}) => {
    return (dbName) => {
      const schema = new mongoose.Schema({
        text: String,
        id: Number,
        iscompleted: Boolean,
      }, {
        versionKey: false,
        collection: 'sessions'
      });
      return connection.useDb(dbName).model('session', schema);
    };
  };
  