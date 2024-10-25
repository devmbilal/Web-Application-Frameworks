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

const fileName = "(muhamamd_bilal_waf_lab_28sep.js";
const filePath = path.join(process.cwd(),fileName);

try {
    fs.writeFile(filePath, '', 'utf8');
    console.log('JS File created successfully');
} catch (error) {    
    console.error(error && error.message);
}

const textFileName = "test.txt";
const textfilePath = path.join(process.cwd(),textFileName);

try {
    fs.writeFile(textfilePath, '04072113022', 'utf8');
    console.log(' Text File created successfully');
} catch (error) {    
    console.error(error && error.message);
}


try {
    const data = await fs.readFile(textfilePath, 'utf8');
    console.log('Data read from the file :', data);
    console.log('Text File read successfully');
    
} catch (error) {
    console.error(error && error.message);
} 