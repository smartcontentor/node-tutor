const {readFile} = require('fs')
const { result } = require('lodash')
const fetch = require('node-fetch')
const getTextFile = (path) => {
    return new Promise((resolve , reject) => {
        readFile(path , 'utf8', (err , data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

getTextFile('./text.txt')
    .then(result => console.log(result))
    .catch(err => console.error(err))