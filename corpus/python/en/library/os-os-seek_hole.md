---
id: "python-en-function-os-seek_hole"
language: "python"
lang: "en"
category: "function"
name: "SEEK_HOLE"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.SEEK_HOLE"
license: "PSF"
updated: "2026-10-01"
---

# SEEK_HOLE

Parameters to the `lseek` function and the `~io.IOBase.seek`
method on `file-like objects`,
for seeking file data and holes on sparsely allocated files.

`SEEK_DATA`
   Adjust the file offset to the next location containing data,
   relative to the seek position.

`SEEK_HOLE`
   Adjust the file offset to the next location containing a hole,
   relative to the seek position.
   A hole is defined as a sequence of zeros.

> **Note**
>
> These operations only make sense for filesystems that support them.
>

availability:: Linux >= 3.1, macOS, Unix

> *Added in 3.3*
