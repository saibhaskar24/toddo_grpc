module.exports = ({db}) => {
    return async ({text}) => {
        const  exist = await db.todo.isTextexist({text});
        if (exist) {
            const data = await db.todo.deletetodo({text});
        }
        throw "Text doesn't exist";
    }
}