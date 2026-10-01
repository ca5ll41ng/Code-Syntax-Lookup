---
id: "python-en-function-ssl-sslcontext-set_default_verify_paths"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_default_verify_paths"
signature: "SSLContext.set_default_verify_paths()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_default_verify_paths"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_default_verify_paths

Load a set of default "certification authority" (CA) certificates from
a filesystem path defined when building the OpenSSL library.  Unfortunately,
there's no easy way to know whether this method succeeds: no error is
returned if no certificates are to be found.  When the OpenSSL library is
provided as part of the operating system, though, it is likely to be
configured properly.
