import * as XLSX from 'xlsx';

// Utility function to convert table data to Excel (dynamic for any table)
const exportTableToExcel = (data, columns, fileName = 'TableData') => {
  // Transform the data based on the provided columns
  const formattedData = data.map((row) => {
    const formattedRow = {};
    columns.forEach((col) => {
      formattedRow[col.label] = col.accessor(row); // Dynamic column access
    });
    return formattedRow;
  });

  // Create a new workbook and add the data
  const ws = XLSX.utils.json_to_sheet(formattedData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Trigger download with the given filename
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};

export default exportTableToExcel