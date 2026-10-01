---
id: "python-en-function-ctypes-create_unicode_buffer"
language: "python"
lang: "en"
category: "function"
name: "create_unicode_buffer"
signature: "create_unicode_buffer(init, size=None)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.create_unicode_buffer"
license: "PSF"
updated: "2026-10-01"
---

# create_unicode_buffer

This function creates a mutable unicode character buffer. The returned object is
a ctypes array of `c_wchar`.

The function takes the same arguments as `~create_string_buffer` except
*init* must be a string and *size* counts `c_wchar`.

audit-event:: ctypes.create_unicode_buffer init,size ctypes.create_unicode_buffer
