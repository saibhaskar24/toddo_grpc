
module.exports = ({db}) => {
    return async () => {
        const items = await  db.todo.readtodos();
        return items;
    }
}