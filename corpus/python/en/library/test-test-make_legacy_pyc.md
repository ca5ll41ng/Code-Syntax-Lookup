---
id: "python-en-function-test-make_legacy_pyc"
language: "python"
lang: "en"
category: "function"
name: "make_legacy_pyc"
signature: "make_legacy_pyc(source)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.make_legacy_pyc"
license: "PSF"
updated: "2026-10-01"
---

# make_legacy_pyc

Move a PEP 3147/PEP 488 pyc file to its legacy pyc location and return the file
system path to the legacy pyc file.  The *source* value is the file system
path to the source file.  It does not need to exist, however the PEP
3147/488 pyc file must exist.
