const getSaludo = (nombre) =>{
    return `Hola ${nombre}`;
}

const getUser = () =>{
    return {
        uid: 'ABC123',
        username: 'Mayo1998'
    }
}

module.exports = {
    getSaludo,
    getUser
}