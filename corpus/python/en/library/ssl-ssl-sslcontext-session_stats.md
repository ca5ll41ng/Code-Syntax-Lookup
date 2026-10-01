---
id: "python-en-function-ssl-sslcontext-session_stats"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.session_stats"
signature: "SSLContext.session_stats()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.session_stats"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.session_stats

Get statistics about the SSL sessions created or managed by this context.
A dictionary is returned which maps the names of each [piece of information](https://docs.openssl.org/1.1.1/man3/SSL_CTX_sess_number/) to their
numeric values.  For example, here is the total number of hits and misses
in the session cache since the context was created::

   >>> stats = context.session_stats()
   >>> stats['hits'], stats['misses']
   (0, 0)
