import store from "./store";


export function getProtectedThing()
{
    const state=store.getState();

    const authToken=state.currentUser.token;

    return fetch('/user/thing',{
        method:'GET',
        headers:{
            Authorization:'Bearer ${authToken}'
        }
    }).then(res=>res.json());
}