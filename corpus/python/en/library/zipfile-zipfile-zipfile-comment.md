---
id: "python-en-function-zipfile-zipfile-comment"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.comment"
directive: "attribute"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.comment"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.comment

The comment associated with the ZIP file as a `bytes` object.
If assigning a comment to a
`ZipFile` instance created with mode `'w'`, `'x'` or `'a'`,
it should be no longer than 65535 bytes.  Comments longer than this will be
truncated.
