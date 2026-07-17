import fs from "fs/promises"
import path from "path"
export const isUnique=async(dir_subdir_path, filename)=>{
    try{
        await fs.access(path.join(dir_subdir_path, filename));
        return false;
    }
    catch(err)
    {
        return true;
    }
}
export const generateUniqueName=async(dir_subdir_path,filename)=>{
    const ext= path.extname(filename);
    const name = path.basename(filename , ext);
    let counter=1;
    while(!(await isUnique(dir_subdir_path, `${name} (${counter})${ext}`))){
        counter++;
    }
    return `${name} (${counter})${ext}`;

}