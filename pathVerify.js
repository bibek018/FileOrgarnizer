import fs from "fs/promises";
export const pathVerify=  async(path)=>{
return await   fs.access(path);
}

export const fileStats = async (path )=>{
return await fs.stat(path)
}