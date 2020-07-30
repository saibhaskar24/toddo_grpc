module.exports = ({db}) => {
    return async ({text}) => {
        const  exist = await db.todo.isTextexist({text});
        if (exist) {
            const data = await db.todo.findtodo({text});
            return data;
        }
        throw "Text doesn't exist";
    }
}