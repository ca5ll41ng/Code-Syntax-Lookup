---
id: "python-en-function-sys-abi_info"
language: "python"
lang: "en"
category: "function"
name: "abi_info"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.abi_info"
license: "PSF"
updated: "2026-10-01"
---

# abi_info

> *Added in 3.15*

An object containing information about the ABI of the currently running
Python interpreter.
It should include information that affect the CPython ABI in ways that
require a specific build of the interpreter chosen from variants that can
co-exist on a single machine.
For example, it does not encode the base OS (Linux or Windows), but does
include pointer size since some systems support both 32- and 64-bit builds.
The available entries are the same on all platforms;
e.g. *pointer_size* is available even on 64-bit-only architectures.

The following attributes are available:

attribute:: abi_info.pointer_bits

attribute:: abi_info.free_threaded

attribute:: abi_info.debug

attribute:: abi_info.byteorder
