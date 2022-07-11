const fs = require('fs')

const jsonData = {
  country: 'serbia',
  numberRecruitable: 7,
  alreadyRecruited: ['Radomir Putnik'],
  couldRecruit: [
    'Stepanovich',
    'Bojovic',
    'Sturm',
    'Micis'
  ],
}

const fileName = 'second-balkan-war'
const path = './historical/'
const ext = '.jsonc'
const filePath = path + fileName + ext

// write file
fs.writeFileSync(filePath, JSON.stringify(jsonData))

// read content
const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

// log content
console.log(fileContent)
