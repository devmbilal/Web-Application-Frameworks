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