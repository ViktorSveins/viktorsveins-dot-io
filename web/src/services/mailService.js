const endpoint = 'http://localhost:3500/api/send';

const sendMail = message => {
    return fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: { 
            'Content-Type': 'application/json',
         }
    });
};

export default sendMail;