---
id: "python-en-function-platform-win32_ver"
language: "python"
lang: "en"
category: "function"
name: "win32_ver"
signature: "win32_ver(release='', version='', csd='', ptype='')"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#platform.win32_ver"
license: "PSF"
updated: "2026-10-01"
---

# win32_ver

Get additional version information from the Windows Registry and return a tuple
`(release, version, csd, ptype)` referring to OS release, version number,
CSD level (service pack) and OS type (multi/single processor). Values which
cannot be determined are set to the defaults given as parameters (which all
default to an empty string).

As a hint: *ptype* is `'Uniprocessor Free'` on single processor NT machines
and `'Multiprocessor Free'` on multi processor machines. The `'Free'` refers
to the OS version being free of debugging code. It could also state `'Checked'`
which means the OS version uses debugging code, i.e. code that checks arguments,
ranges, etc.
