---
id: "python-en-function-shlex-shlex-source"
language: "python"
lang: "en"
category: "function"
name: "shlex.source"
directive: "attribute"
module: "shlex"
source_url: "https://docs.python.org/3/library/shlex.html#shlex.source"
license: "PSF"
updated: "2026-10-01"
---

# shlex.source

This attribute is `None` by default.  If you assign a string to it, that
string will be recognized as a lexical-level inclusion request similar to the
`source` keyword in various shells.  That is, the immediately following token
will be opened as a filename and input will be taken from that stream until
EOF, at which point the `~io.IOBase.close` method of that stream will be
called and the input source will again become the original input stream.  Source
requests may be stacked any number of levels deep.
