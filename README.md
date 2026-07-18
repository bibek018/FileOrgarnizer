# File Organizer

File Organizer is a small Node.js CLI that moves files from a chosen folder into category-based subfolders. It uses built-in Node.js modules and runs directly from the command line.

## What It Does

- Scans the provided directory
- Processes only files, not subfolders
- Places files into a matching destination folder based on extension
- Creates destination folders automatically when needed
- Avoids overwriting files by generating names such as `file (1).txt`

## Supported File Types

- Images: `.png`, `.jpg`, `.jpeg`
- Documents: `.doc`, `.txt`, `.csv`, `.pptx`, `.xlsx`, `.pdf`
- Media: `.mp4`, `.mp3`, `.mkv`
- Others: any extension not listed above

## Requirements

- Node.js 16 or later
- A folder path to organize

## Installation

```bash
git clone <your-repo-url>
cd fileorganizer
```

No extra dependencies are required.

## Usage

Run the organizer with a folder path:

```bash
node main.js "C:\Users\YourName\Downloads"
```

You can also use the npm script:

```bash
npm start -- "C:\Users\YourName\Downloads"
```

## How It Works

1. The script verifies that the provided path exists.
2. It reads the entries in the folder.
3. It checks whether each entry is a file.
4. It detects the file extension and chooses the destination folder.
5. If a file with the same name already exists, a new unique name is generated.
6. The file is moved into the appropriate folder.

## Project Structure

```text
fileorganizer/
├── main.js
├── fetchDir.js
├── extFetch.js
├── pathVerify.js
├── handleDuplicacy.js
├── package.json
├── README.md
└── temp-demo/   # created temporarily for testing the script
```

## Notes

- Only the top-level contents of the target folder are processed.
- Directories are skipped.
- Files are moved, not copied.
- The project currently declares the ISC license in package.json.
