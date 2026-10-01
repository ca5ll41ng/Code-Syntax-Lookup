---
id: "python-en-function-msvcrt-open_osfhandle"
language: "python"
lang: "en"
category: "function"
name: "open_osfhandle"
signature: "open_osfhandle(handle, flags)"
directive: "function"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.open_osfhandle"
license: "PSF"
updated: "2026-10-01"
---

# open_osfhandle

Create a C runtime file descriptor from the file handle *handle*. The *flags*
parameter should be a bitwise OR of `os.O_APPEND`,
`os.O_RDONLY`, `os.O_TEXT` and `os.O_NOINHERIT`.
The returned file descriptor may be used as a parameter
to `os.fdopen` to create a file object.

The file descriptor is inheritable by default. Pass `os.O_NOINHERIT`
flag to make it non inheritable.

audit-event:: msvcrt.open_osfhandle handle,flags msvcrt.open_osfhandle
