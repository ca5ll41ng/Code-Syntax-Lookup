---
id: "python-zh-function-ssl-rand_bytes"
language: "python"
lang: "zh"
category: "function"
name: "RAND_bytes"
signature: "RAND_bytes(num, /)"
directive: "function"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.RAND_bytes"
license: "PSF"
updated: "2026-10-01"
---

# RAND_bytes

Return *num* cryptographically strong pseudo-random bytes. Raises an
`SSLError` if the PRNG has not been seeded with enough data or if the
operation is not supported by the current RAND method. `RAND_status`
can be used to check the status of the PRNG and `RAND_add` can be used
to seed the PRNG.

对于几乎所有应用程序都更推荐使用 :func:`os.urandom`。

Read the Wikipedia article, `Cryptographically secure pseudorandom number
generator (CSPRNG)
<https://en.wikipedia.org/wiki/Cryptographically_secure_pseudorandom_number_generator>`_,
to get the requirements of a cryptographically strong generator.

> *Added in 3.3*
