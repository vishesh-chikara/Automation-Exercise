import fs from 'fs' ;
import {parse} from 'csv-parse/sync'; 

export class DataProvider
{
    getTestDatafromJson(filepath:string) : string
    {
       let data : string = JSON.parse(fs.readFileSync(filepath , 'utf-8'));
       return data ;
    }


getTestDatafromCSV(filePath:string)  : any
{
     let data =  parse (fs.readFileSync(filePath) , {columns:true, skip_empty_lines :true});
     return data ; 
}
}