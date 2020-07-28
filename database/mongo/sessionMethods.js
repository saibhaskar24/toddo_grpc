
module.exports = ({ sessionModel } = {}) => {
    const createSession = async ({ organization, session }) => {
      const SessionModel = sessionModel(organization);
      const data = new SessionModel(session);
      await data.save();
      const sessionInfo = JSON.parse(JSON.stringify(data));
      delete sessionInfo._id;
      return { SessionId: data._id, Session: sessionInfo };
    };
  
    const updateProfile = async ({ organization, sessionId, updates }) => {
      await sessionModel(organization).findByIdAndUpdate(sessionId, updates).lean().exec();
      return true;
    };
  
    const getSession = async ({ organization, sessionId }) => {
      const session = await sessionModel(organization).findById(sessionId).lean().exec();
      const { _id: SessionId, ...sessionInfo } = session;
      return { SessionId, ...sessionInfo };
    };
  
    const deleteSession = async ({ organization, sessionId }) => {
      await sessionModel(organization).findByIdAndRemove(sessionId).lean().exec();
      return true;
    };
  
    return Object.freeze({
      createSession,
      updateProfile,
      getSession,
      deleteSession
    });
  };
  