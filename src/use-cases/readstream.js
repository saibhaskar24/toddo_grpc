
module.exports = ({db}) => {
    return async () => {
        const items = await  db.todo.readtodos();
        // console.log(items);
        return items;
    }
}