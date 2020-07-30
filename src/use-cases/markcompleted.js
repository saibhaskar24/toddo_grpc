module.exports = ({db}) => {
    return async ({text,newtext}) => {
        const  exist = await db.todo.isIDexist({id});
        if (exist) {
            const data = await db.todo.markcompletedtodo({id});
            return data;
        }
        throw "Text doesn't exist";
    }
}