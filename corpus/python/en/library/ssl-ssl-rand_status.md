---
id: "python-en-function-ssl-rand_status"
language: "python"
lang: "en"
category: "function"
name: "RAND_status"
signature: "RAND_status()"
directive: "function"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.RAND_status"
license: "PSF"
updated: "2026-10-01"
---

# RAND_status

Return `True` if the SSL pseudo-random number generator has been seeded
with 'enough' randomness, and `False` otherwise.  Use `ssl.RAND_add`
to increase the randomness of the pseudo-random number generator.
