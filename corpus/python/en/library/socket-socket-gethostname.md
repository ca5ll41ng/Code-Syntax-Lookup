---
id: "python-en-function-socket-gethostname"
language: "python"
lang: "en"
category: "function"
name: "gethostname"
signature: "gethostname()"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.gethostname"
license: "PSF"
updated: "2026-10-01"
---

# gethostname

Return a string containing the hostname of the machine where  the Python
interpreter is currently executing.

audit-event:: socket.gethostname "" socket.gethostname

Note: `gethostname` doesn't always return the fully qualified domain
name; use `getfqdn` for that.

availability:: not WASI.
