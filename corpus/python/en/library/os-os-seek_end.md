---
id: "python-en-function-os-seek_end"
language: "python"
lang: "en"
category: "function"
name: "SEEK_END"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.SEEK_END"
license: "PSF"
updated: "2026-10-01"
---

# SEEK_END

Parameters to the `lseek` function and the `~io.IOBase.seek`
method on `file-like objects`,
for whence to adjust the file position indicator.

`SEEK_SET`
   Adjust the file position relative to the beginning of the file.
`SEEK_CUR`
   Adjust the file position relative to the current file position.
`SEEK_END`
   Adjust the file position relative to the end of the file.

Their values are 0, 1, and 2, respectively.
