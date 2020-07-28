module.exports = ({todomodel}) => {
    const createtodo = async ({text}) => {
        const dotoitem = new todomodel({ text, 'iscompleted': false});
        await dotoitem.save();
        return {id:dotoitem._id,text,iscompleted: false}
    }
    const isTextexist = async ({text}) => {
        const exist = await todomodel.findOne({text}).lean().exec();
        if (exist) {
            return true;
        }
        return false
    }

    return Object.freeze({
        createtodo,
        isTextexist
    });
}