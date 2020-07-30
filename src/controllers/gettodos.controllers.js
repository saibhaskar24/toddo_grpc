module.exports = ({usecase}) => {
    return async ({request},callback) => {
        try {
            const usecasedata = await usecase(request);
            callback(null, {'items':usecasedata});
        }
        catch(err) {
            console.log(err);
            callback({message: err});
        }

    }
}