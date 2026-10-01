---
id: "python-en-function-fileinput-nextfile"
language: "python"
lang: "en"
category: "function"
name: "nextfile"
signature: "nextfile()"
directive: "function"
module: "fileinput"
source_url: "https://docs.python.org/3/library/fileinput.html#fileinput.nextfile"
license: "PSF"
updated: "2026-10-01"
---

# nextfile

Close the current file so that the next iteration will read the first line from
the next file (if any); lines not read from the file will not count towards the
cumulative line count.  The filename is not changed until after the first line
of the next file has been read.  Before the first line has been read, this
function has no effect; it cannot be used to skip the first file.  After the
last line of the last file has been read, this function has no effect.
