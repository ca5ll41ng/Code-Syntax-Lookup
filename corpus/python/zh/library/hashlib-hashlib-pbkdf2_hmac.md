---
id: "python-zh-function-hashlib-pbkdf2_hmac"
language: "python"
lang: "zh"
category: "function"
name: "pbkdf2_hmac"
signature: "pbkdf2_hmac(hash_name, password, salt, iterations, dklen=None)"
directive: "function"
module: "hashlib"
source_url: "https://docs.python.org/zh-cn/3/library/hashlib.html#hashlib.pbkdf2_hmac"
license: "PSF"
updated: "2026-10-01"
---

# pbkdf2_hmac

The function provides PKCS#5 password-based key derivation function 2. It
uses HMAC as pseudorandom function.

The string *hash_name* is the desired name of the hash digest algorithm for
HMAC, e.g. 'sha1' or 'sha256'. *password* and *salt* are interpreted as
buffers of bytes. Applications and libraries should limit *password* to
a sensible length (e.g. 1024). *salt* should be about 16 or more bytes from
a proper source, e.g. `os.urandom`.

The number of *iterations* should be chosen based on the hash algorithm and
computing power. As of 2022, hundreds of thousands of iterations of SHA-256
are suggested. For rationale as to why and how to choose what is best for
your application, read *Appendix A.2.2* of NIST-SP-800-132_. The answers
on the `stackexchange pbkdf2 iterations question`_ explain in detail.

*dklen* is the length of the derived key in bytes. If *dklen* is `None` then the
digest size of the hash algorithm *hash_name* is used, e.g. 64 for SHA-512.

>>> from hashlib import pbkdf2_hmac
>>> our_app_iters = 500_000  # Application specific, read above.
>>> dk = pbkdf2_hmac('sha256', b'password', b'bad salt' * 2, our_app_iters)
>>> dk.hex()
'15530bba69924174860db778f2c6f8104d3aaf9d26241840c8c4a641c8d000a9'

此函数只有在 Python 附带 OpenSSL 编译时才可用。

> *Added in 3.4*

> *Changed in 3.12*: Function now only available when Python is built with OpenSSL. The slow pure Python implementation has been removed.
