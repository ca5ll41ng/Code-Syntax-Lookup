---
id: "python-en-function-shutil-copyfileobj"
language: "python"
lang: "en"
category: "function"
name: "copyfileobj"
signature: "copyfileobj(fsrc, fdst[, length])"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.copyfileobj"
license: "PSF"
updated: "2026-10-01"
---

# copyfileobj

Copy the contents of the `file-like object` *fsrc* to the file-like object *fdst*.
The integer *length*, if given, is the buffer size. In particular, a negative
*length* value means to copy the data without looping over the source data in
chunks; by default the data is read in chunks to avoid uncontrolled memory
consumption. Note that if the current file position of the *fsrc* object is not
0, only the contents from the current file position to the end of the file will
be copied.

`copyfileobj` will *not* guarantee that the destination stream has
been flushed on completion of the copy. If you want to read from the
destination at the completion of the copy operation (for example, reading
the contents of a temporary file that has been copied from a HTTP stream),
you must ensure that you have called `~io.IOBase.flush` or
`~io.IOBase.close` on the file-like object before attempting to read
the destination file.
