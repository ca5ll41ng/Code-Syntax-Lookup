---
id: "python-en-function-hashlib-scrypt"
language: "python"
lang: "en"
category: "function"
name: "scrypt"
signature: "scrypt(password, *, salt, n, r, p, maxmem=0, dklen=64)"
directive: "function"
module: "hashlib"
source_url: "https://docs.python.org/3/library/hashlib.html#hashlib.scrypt"
license: "PSF"
updated: "2026-10-01"
---

# scrypt

The function provides scrypt password-based key derivation function as
defined in RFC 7914.

*password* and *salt* must be `bytes-like objects`.  Applications and libraries should limit *password*
to a sensible length (e.g. 1024).  *salt* should be about 16 or more
bytes from a proper source, e.g. `os.urandom`.

*n* is the CPU/Memory cost factor, *r* the block size, *p* parallelization
factor and *maxmem* limits memory (OpenSSL 1.1.0 defaults to 32 MiB).
*dklen* is the length of the derived key in bytes.

> *Added in 3.6*
