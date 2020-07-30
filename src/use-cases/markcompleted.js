module.exports = ({db}) => {
    return async ({text,newtext}) => {
        const  exist = await db.todo.isTextexist({text});
        if (exist) {
            const data = await db.todo.markcompletedtodo({text});
            return data;
        }
        throw "Text doesn't exist";
    }
}