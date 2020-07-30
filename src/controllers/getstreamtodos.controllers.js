module.exports = ({usecase}) => {
    return async (call,callback) => {

        try {
            const usecasedata = await usecase();
            usecasedata.forEach(t => call.write(t));
            call.end();
        }
        catch(err) {
            console.log(err);
            callback({message: err});
        }

    }
}