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
    const readtodos = async () => {
        const data = await todomodel.find( {});
        return data;
    }
    const deletetodo = async ({text}) => {
        const data = await todomodel.deleteOne({text});
        return data;
    }
    const updatetodo = async ({text,newtext}) => {
        const data = await todomodel.updateOne({text},{text:newtext});
        return data;
    }
    const markcompletedtodo = async ({text}) => {
        const data = await todomodel.updateOne({text},{iscompleted:true});
        return data;
    }
    return Object.freeze({
        createtodo,
        isTextexist,
        readtodos,
        deletetodo,
        updatetodo,
        markcompletedtodo
    });
}