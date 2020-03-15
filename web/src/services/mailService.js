const endpoint = 'https://viktorsveins.io/api/send';

const sendMail = message => {
    return fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(message),
	credentials: 'include',
        headers: { 
            'Content-Type': 'application/json',
         }
    })
    .then(res => {
        if(!res.ok) { throw new Error(res.statusText) }
        else { return true; }
    })
    .catch(() => false )
};

export default sendMail;
