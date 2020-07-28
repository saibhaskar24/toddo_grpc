module.exports = ({db}) => {
  return async ({text}) => {
    const exist = await db.todo.isTextexist({text});
    if (exist) {
      throw "Text already exist";
    }
    const item =  await db.todo.createtodo({text});
    return item;
  }
}