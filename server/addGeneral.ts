import * as fs from 'fs'

const exampleGeneral = {
  name: 'example gen 2',
  type: 'infantry',
  gen_ability: 86,
  sp_abilty: 40,
}

const file = exampleGeneral.name.replace(/ /g, '_',).toLowerCase()

;(async () => {
  const data = JSON.stringify(exampleGeneral, null, 2)
  fs.writeFile(`server/generals/${file}.jsonc`, data, (err) => {
    if (err) throw err
  })
})()
