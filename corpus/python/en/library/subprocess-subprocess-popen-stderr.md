---
id: "python-en-function-subprocess-popen-stderr"
language: "python"
lang: "en"
category: "function"
name: "Popen.stderr"
directive: "attribute"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.Popen.stderr"
license: "PSF"
updated: "2026-10-01"
---

# Popen.stderr

If the *stderr* argument was `PIPE`, this attribute is a readable
stream object as returned by `open`. Reading from the stream provides
error output from the child process. If the *encoding* or *errors* arguments
were specified or the *text* or *universal_newlines* argument was `True`, the
stream is a text stream, otherwise it is a byte stream. If the *stderr* argument
was not `PIPE`, this attribute is `None`.
