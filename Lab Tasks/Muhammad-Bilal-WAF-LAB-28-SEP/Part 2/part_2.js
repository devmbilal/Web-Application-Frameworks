import fs from 'fs';
import path from 'path';

const fileName = "IPs.txt"
const filePath = path.join(process.cwd(),fileName);

try {    
    const data = fs.readFileSync(filePath, 'utf8');
    data.split('\n').forEach(ip => {
        const arr = ip.split('.');
        console.log(arr[0]);
        
        switch (true) {
            case arr[0] >= 1 && arr[0] <= 127:
                console.log("Class A");
                break;
            case arr[0] >= 128 && arr[0] <= 191:
                console.log("Class B");
                break;
            case arr[0] >= 192 && arr[0] <= 223:
                console.log("Class C");
                break;
            case arr[0] >= 224 && arr[0] <= 239:
                console.log("Class D");
                break;
            default:
                break;
        }
    });    
} catch (err) {
    console.error(err);
}