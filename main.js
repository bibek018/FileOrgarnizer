//File Organizer
import path from "path";
import fs from "fs/promises";
import { pathVerify } from "./pathVerify.js";
import { fetchDir } from "./fetchDir.js";
import { extFetch } from "./extFetch.js";
import { fileStats } from "./pathVerify.js";
const dirpath = process.argv[2];
const Main = async (dirpath) => {
  try {
    await pathVerify(dirpath);
    const files = await fetchDir(dirpath);

    for (const file of files) {
      const fullpath = path.join(dirpath, file);
      const stats = await fileStats(fullpath);

      if (!stats.isFile()) {
        continue;
      } 
      else {
        const ext = await extFetch(file);
        const source = path.join(dirpath, file);
        let destination = "";
        let subdir = "";
        if (ext == ".png" || ext == ".jpg" || ext == ".jpeg") {
          subdir = "Images";
          destination = path.join(dirpath, "Images", file);
        } else if (
          ext == ".doc" ||
          ext == ".txt" ||
          ext == ".csv" ||
          ext == ".pptx" ||
          ext == ".xlsx" ||
          ext == ".pdf"
        ) {
          subdir = "Documents";
          destination = path.join(dirpath, "Documents", file);
        } else if (ext == ".mp4" || ext == ".mp3" || ext == ".mkv") {
          subdir = "Media";
          destination = path.join(dirpath, "Media", file);
        } else {
          destination = path.join(dirpath, "Others", file);
          subdir = "Others";
        }
        await fs.mkdir(path.join(dirpath, subdir), { recursive: true });
        await fs.rename(source, destination);
      }
    }
    console.log("Files were successfully arranged ✓");
  } catch (err) {
    console.log(err.message);
    console.log(err.code);
  }
};
Main(dirpath);
