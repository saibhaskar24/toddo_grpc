
module.exports = ({db}) => {
    return async () => {
        const items = await  db.todo.readtodos();
        // console.log(items);
        items.forEach(t => call.write(t));
        call.end();
    }
}