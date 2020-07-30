module.exports = ({db}) => {
    return async ({id,newtext}) => {
        const  exist = await db.todo.isIDexist({id});
        if (exist) {
            const data = await db.todo.updatetodo({id,newtext});
            return data;
        }
        throw "Text doesn't exist";
    }
}