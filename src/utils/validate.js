import XLSX from 'js-xlsx'

// 检查外界协议
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

// 导出Excel
export const createExcel = (sheetData, sheetHead, sheetName) => {
  const tempSheetData = [sheetHead]
  sheetData.forEach(item => {
    const tRowData = [...item]
    tempSheetData.push(tRowData)
  })
  const ws = XLSX.utils.aoa_to_sheet(tempSheetData)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, '工作簿')
  XLSX.writeFile(wb, sheetName + '.xls')
}

export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
