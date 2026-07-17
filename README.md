# File Organizer

File Organizer is a simple Node.js CLI tool that scans a folder and automatically sorts files into category-based subfolders such as Images, Documents, Media, and Others.

It is useful for quickly cleaning up a messy directory and keeping downloads, desktop folders, or project assets organized.

## Features

- Sorts files by extension into dedicated folders
- Creates destination folders automatically if they do not exist
- Works from the command line with a single folder path
- Keeps the original file names intact

## How It Works

The script checks every item inside the target directory. If the item is a file, it looks at the file extension and moves it into the matching folder:

- Images: `.png`, `.jpg`, `.jpeg`
- Documents: `.doc`, `.txt`, `.csv`, `.pptx`, `.xlsx`, `.pdf`
- Media: `.mp4`, `.mp3`, `.mkv`
- Others: everything else

## Requirements

- Node.js 16 or later
- A folder path you want to organize

## Installation

Clone the repository and make sure dependencies are available:

```bash
git clone <your-repo-url>
cd fileorganizer
```

This project does not use third-party packages, so no install step is required.

## Usage

Run the script and pass the folder path as an argument:

```bash
node main.js "Directory_Path"
```

You can use any valid folder path on your machine:

```bash
node main.js "C:\\Users\\YourName\\Downloads"
```

## Example Output

Before:

```text
Downloads/
  image.png
  notes.pdf
  song.mp3
  random.zip
```

After:

```text
Downloads/
  Images/
    image.png
  Documents/
    notes.pdf
  Media/
    song.mp3
  Others/
    random.zip
```

## Project Structure

```text
fileorganizer/
├── main.js
├── fetchDir.js
├── extFetch.js
├── pathVerify.js
├── makeDir.js
└── package.json
```

## Notes

- The script only organizes files in the top-level directory you provide.
- Existing files with the same name in the destination folder may cause rename conflicts.
- Files are moved, not copied.

## Future Improvements

- Add recursive sorting for nested folders
- Add a dry-run mode
- Support custom extension-to-folder mappings
- Add conflict handling for duplicate file names
- Add a CLI help message and better error handling

## License

This project is currently unlicensed. Add a license if you plan to publish it publicly.