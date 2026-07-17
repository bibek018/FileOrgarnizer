# File Organizer

File Organizer is a lightweight Node.js CLI that automatically sorts files in a folder into category-based subfolders. It is built for quick cleanup of messy directories such as downloads, desktop folders, or project asset folders.

The script scans the target directory, detects each file type, and moves it into a matching folder such as Images, Documents, Media, or Others. If a file with the same name already exists in the destination, the script generates a unique name instead of overwriting it.

## Features

- Organizes files by extension into folders
- Handles duplicate file names safely
- Creates destination folders automatically
- Works from the command line with a single folder path
- Keeps the original file content intact while moving it

## Supported File Types

- Images: `.png`, `.jpg`, `.jpeg`
- Documents: `.doc`, `.txt`, `.csv`, `.pptx`, `.xlsx`, `.pdf`
- Media: `.mp4`, `.mp3`, `.mkv`
- Others: any extension not listed above

## Requirements

- Node.js 16 or later
- A folder path you want to organize

## Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd fileorganizer
```

No extra packages are required because this project uses only built-in Node.js modules.

## Usage

Run the organizer by passing a folder path:

```bash
node main.js "Directory_Path"
```

If you added the `start` script in `package.json`, you can also use:

```bash
npm start -- "Directory_Path"
```

Example:

```bash
node main.js "C:\\Users\\YourName\\Downloads"
```

For the same example, the npm version would be:

```bash
npm start -- "C:\\Users\\YourName\\Downloads"
```

## Example Result

Before:

```text
Downloads/
  image.png
  report.pdf
  song.mp3
  image.png
```

After:

```text
Downloads/
  Images/
    image.png
    image (1).png
  Documents/
    report.pdf
  Media/
    song.mp3
```

## How It Works

1. The script verifies that the provided path exists.
2. It reads all items in the folder.
3. It checks whether each item is a file.
4. It detects the file extension and chooses the destination folder.
5. If a file with the same name already exists in the destination, a new name like `file (1).txt` is generated.
6. The file is moved into the appropriate folder.

## Project Structure

```text
fileorganizer/
├── main.js
├── fetchDir.js
├── extFetch.js
├── pathVerify.js
├── handleDuplicacy.js
├── makeDir.js
├── package.json
└── README.md
```

## Notes

- The script organizes only the top-level contents of the folder you pass in.
- Existing files are never overwritten when a duplicate name is found.
- Files are moved, not copied.

## Future Improvements

- Add recursive folder scanning
- Add a dry-run mode
- Support custom extension categories
- Add better CLI help and validation
- Improve duplicate-handling messages in the console

## License

This project is currently unlicensed. Add a license file if you plan to publish it publicly.
