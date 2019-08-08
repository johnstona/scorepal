export const importAll = (r) => {
  let itemsToExport = {}
  r.keys().map(item => { itemsToExport[item.replace('./', '')] = r(item) })
  return itemsToExport
}

export default {
  importAll
}