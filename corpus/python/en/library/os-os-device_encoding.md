---
id: "python-en-function-os-device_encoding"
language: "python"
lang: "en"
category: "function"
name: "device_encoding"
signature: "device_encoding(fd)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.device_encoding"
license: "PSF"
updated: "2026-10-01"
---

# device_encoding

Return a string describing the encoding of the device associated with *fd*
if it is connected to a terminal; else return `None`.

On Unix, if the `Python UTF-8 Mode` is enabled, return
`'UTF-8'` rather than the device encoding.

> *Changed in 3.10*: On Unix, the function now implements the Python UTF-8 Mode.
