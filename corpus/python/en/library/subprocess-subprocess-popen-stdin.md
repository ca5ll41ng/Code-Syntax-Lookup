---
id: "python-en-function-subprocess-popen-stdin"
language: "python"
lang: "en"
category: "function"
name: "Popen.stdin"
directive: "attribute"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.Popen.stdin"
license: "PSF"
updated: "2026-10-01"
---

# Popen.stdin

If the *stdin* argument was `PIPE`, this attribute is a writeable
stream object as returned by `open`. If the *encoding* or *errors*
arguments were specified or the *text* or *universal_newlines* argument
was `True`, the stream is a text stream, otherwise it is a byte stream.
If the *stdin* argument was not `PIPE`, this attribute is `None`.
