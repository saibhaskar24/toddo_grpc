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
    const isIDexist = async ({id}) => {
        const exist = await todomodel.findOne({_id:id}).lean().exec();
        if (exist) {
            return true;
        }
        return false
    }
    const findtodo = async ({text}) => {
        const data = await todomodel.findOne({text}).lean().exec();
        return {id:data._id,text,iscompleted: data.iscompleted};
    }
    const readtodos = async () => {
        const data = await todomodel.find( {});
        return data;
    }
    const deletetodo = async ({id}) => {
        const data = await todomodel.findOneAndDelete({_id:id});
        return {id:data._id,text:data.text, iscompleted: data.iscompleted};
    }
    const updatetodo = async ({id,newtext}) => {
        const data = await todomodel.findOneAndUpdate({_id:id},{text:newtext}).lean().exec();
        return {id:data._id,text:newtext,iscompleted: data.iscompleted};
    }
    const markcompletedtodo = async ({id}) => {
        const data = await todomodel.findOneAndUpdate({_id:id},{iscompleted:true});
        return {id:data._id,text:data.text,iscompleted: true};
    }
    return Object.freeze({
        createtodo,
        isTextexist,
        readtodos,
        deletetodo,
        updatetodo,
        markcompletedtodo,
        findtodo,
        isIDexist
    });
}