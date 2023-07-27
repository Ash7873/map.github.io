export function getProtectedThing()
{

    return (dispatch, getState) =>
    {
        const state=getState();

        const authToken=state.currentUser.token;

        return fetch('/user/thing', {
            method:'GET',
            headers:
            {
                Authorization:'Bearer ${authToken}'
            }
        }).then(res => res.json());
    }
}