---
id: "python-en-function-random-choice"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B311"],"cwe":["CWE-330"],"note":"Standard pseudo-random generators are not suitable for security/cryptographic purposes."}
name: "choice"
signature: "choice(seq)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.choice"
license: "PSF"
updated: "2026-10-01"
---

# choice

Return a random element from the non-empty sequence *seq*. If *seq* is empty,
raises `IndexError`.
