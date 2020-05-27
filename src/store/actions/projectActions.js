export const createProject = (project) => {
    // we can return a function since we are using thunk (halts dispatch)
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database then dispatch action after
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Shawn',
            authorLastName: 'Lee',
            authorId: 12345,
            creteAt: new Date()
        }).then(() => {
            dispatch({ type:'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
};