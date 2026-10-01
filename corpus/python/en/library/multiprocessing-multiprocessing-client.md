---
id: "python-en-function-multiprocessing-client"
language: "python"
lang: "en"
category: "function"
name: "Client"
signature: "Client(address[, family[, authkey]])"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Client"
license: "PSF"
updated: "2026-10-01"
---

# Client

Attempt to set up a connection to the listener which is using address
*address*, returning a `~Connection`.

The type of the connection is determined by *family* argument, but this can
generally be omitted since it can usually be inferred from the format of
*address*. (See `multiprocessing-address-formats`)

If *authkey* is given and not `None`, it should be a byte string and will be
used as the secret key for an HMAC-based authentication challenge. No
authentication is done if *authkey* is `None`.
`~multiprocessing.AuthenticationError` is raised if authentication fails.
See `multiprocessing-auth-keys`.
