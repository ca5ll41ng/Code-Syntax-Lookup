---
id: "python-en-function-sys-dont_write_bytecode"
language: "python"
lang: "en"
category: "function"
name: "dont_write_bytecode"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.dont_write_bytecode"
license: "PSF"
updated: "2026-10-01"
---

# dont_write_bytecode

If this is true, Python won't try to write `.pyc` files on the
import of source modules.  This value is initially set to `True` or
`False` depending on the `-B` command line option and the
`PYTHONDONTWRITEBYTECODE` environment variable, but you can set it
yourself to control bytecode file generation.
