const axios = require('axios')

//call api axios post
let location = -31.43245248037992335
const calls = async () => {
    await axios.post('https://bondi-server.herokuapp.com/api/coordenadas',{
    "entity":"a",
    "coord":[location +0.001, -62.07158078019124]
})
location = location + 0.001
}
setInterval(() => {
   calls()
}, 7000);