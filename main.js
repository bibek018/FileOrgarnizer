//File Organizer
import path from "path";
import fs from "fs/promises";
import { pathVerify } from "./pathVerify.js";
import { fetchDir } from "./fetchDir.js";
import { extFetch } from "./extFetch.js";
import { fileStats } from "./pathVerify.js";
import { isUnique, generateUniqueName } from "./handleDuplicacy.js";
const EXT_MAP = {
  ".png": "Images",
  ".jpg": "Images",
  ".jpeg": "Images",
  ".doc": "Documents",
  ".txt": "Documents",
  ".csv": "Documents",
  ".pptx": "Documents",
  ".xlsx": "Documents",
  ".pdf": "Documents",
  ".mp4": "Media",
  ".mp3": "Media",
  ".mkv": "Media",
};
const Main = async (dirpath) => {
  try {
    await pathVerify(dirpath);
    const files = await fetchDir(dirpath);
    let fileCounter = 0;
    const foldersUsed = new Set();

    for (const file of files) {
      const fullpath = path.join(dirpath, file);
      const stats = await fileStats(fullpath);

      if (!stats.isFile()) {
        continue;
      }
      const ext = await extFetch(file);
      const subdir = EXT_MAP[ext] || "Others";
      const source = path.join(dirpath, file);
      let destination = "";
      const dir_subdir = path.join(dirpath, subdir);
      if (await isUnique(dir_subdir, file)) {
        destination = path.join(dirpath, subdir, file);
      } else {
        const newname = await generateUniqueName(dir_subdir, file);
        destination = path.join(dirpath, subdir, newname);
      }
      foldersUsed.add(subdir);
      await fs.mkdir(path.join(dirpath, subdir), { recursive: true });
      await fs.rename(source, destination);
      fileCounter++;
    }
    console.log(
      `${fileCounter} were moved successfully into ${foldersUsed.size} folders`,
    );
  } catch (err) {
    console.log(err.message);
    console.log(err.code);
  }
};

const dirpath = process.argv[2];
if (!dirpath) {
  console.log("Please provide the directory path!");
  process.exit(1);
}
Main(dirpath);
