---
id: "python-en-function-multiprocessing-answer_challenge"
language: "python"
lang: "en"
category: "function"
name: "answer_challenge"
signature: "answer_challenge(connection, authkey)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.answer_challenge"
license: "PSF"
updated: "2026-10-01"
---

# answer_challenge

Receive a message, calculate the digest of the message using *authkey* as the
key, and then send the digest back.

If a welcome message is not received, then
`~multiprocessing.AuthenticationError` is raised.
