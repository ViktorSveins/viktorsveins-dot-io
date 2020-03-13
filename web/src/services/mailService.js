const endpoint = 'http://localhost:3500/api/send';

const sendMail = message => {
    return fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(message),
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