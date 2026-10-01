---
id: "python-en-function-os-environb"
language: "python"
lang: "en"
category: "function"
name: "environb"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.environb"
license: "PSF"
updated: "2026-10-01"
---

# environb

Bytes version of `environ`: a `mapping` object where both keys
and values are `bytes` objects representing the process environment.
`environ` and `environb` are synchronized (modifying
`environb` updates `environ`, and vice versa).

`environb` is only available if `supports_bytes_environ` is
`True`.

> *Added in 3.2*

> *Changed in 3.9*: Updated to support :pep:`584`'s merge (``|``) and update (``|=``) operators.
