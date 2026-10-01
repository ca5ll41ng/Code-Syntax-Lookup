---
id: "python-en-function-multiprocessing-deliver_challenge"
language: "python"
lang: "en"
category: "function"
name: "deliver_challenge"
signature: "deliver_challenge(connection, authkey)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.deliver_challenge"
license: "PSF"
updated: "2026-10-01"
---

# deliver_challenge

Send a randomly generated message to the other end of the connection and wait
for a reply.

If the reply matches the digest of the message using *authkey* as the key
then a welcome message is sent to the other end of the connection.  Otherwise
`~multiprocessing.AuthenticationError` is raised.
