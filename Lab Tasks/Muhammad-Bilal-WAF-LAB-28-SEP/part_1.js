import fs from 'fs/promises';
import path from 'path';


const folderName = "part_1"; 
const folderPath = path.join(process.cwd(),folderName);


try {
    await fs.mkdir(folderPath, { recursive: true });
    console.log('Folder created successfully');
} catch (error) {
    console.error(error && error.message);
}

const fileName = "(muhamamd_bilal_waf_lab_28sep";
const filePath = path.join(process.cwd(),fileName);

try {
    fs.writeFile(filePath, '', 'utf8');
    console.log('File created successfully');
} catch (error) {    
    console.error(error && error.message);
}