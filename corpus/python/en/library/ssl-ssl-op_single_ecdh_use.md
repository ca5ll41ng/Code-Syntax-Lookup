---
id: "python-en-function-ssl-op_single_ecdh_use"
language: "python"
lang: "en"
category: "function"
name: "OP_SINGLE_ECDH_USE"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.OP_SINGLE_ECDH_USE"
license: "PSF"
updated: "2026-10-01"
---

# OP_SINGLE_ECDH_USE

Prevents reuse of the same ECDH key for distinct SSL sessions.  This
improves forward secrecy but requires more computational resources.
This option only applies to server sockets.

> *Added in 3.3*
