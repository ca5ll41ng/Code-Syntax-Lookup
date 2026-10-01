---
id: "python-en-function-test-findfile"
language: "python"
lang: "en"
category: "function"
name: "findfile"
signature: "findfile(filename, subdir=None)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.findfile"
license: "PSF"
updated: "2026-10-01"
---

# findfile

Return the path to the file named *filename*. If no match is found
*filename* is returned. This does not equal a failure since it could be the
path to the file.

Setting *subdir* indicates a relative path to use to find the file
rather than looking directly in the path directories.
