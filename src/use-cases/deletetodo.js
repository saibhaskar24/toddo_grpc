module.exports = ({db}) => {
    return async ({text}) => {
        const  exist = await db.todo.isIDexist({id});
        if (exist) {
            const data = await db.todo.deletetodo({id});
            return data;
        }
        throw "Text doesn't exist";
    }
}