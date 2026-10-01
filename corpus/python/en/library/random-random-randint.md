---
id: "python-en-function-random-randint"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B311"],"cwe":["CWE-330"],"note":"Standard pseudo-random generators are not suitable for security/cryptographic purposes."}
name: "randint"
signature: "randint(a, b)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.randint"
license: "PSF"
updated: "2026-10-01"
---

# randint

Return a random integer *N* such that `a <= N <= b`.  Alias for
`randrange(a, b+1)`.
