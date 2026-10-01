---
id: "python-en-function-ssl-sslcontext-hostname_checks_common_name"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.hostname_checks_common_name"
directive: "attribute"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.hostname_checks_common_name"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.hostname_checks_common_name

Whether `~SSLContext.check_hostname` falls back to verify the cert's
subject common name in the absence of a subject alternative name
extension (default: true).

> *Added in 3.7*

> *Changed in 3.10*: The flag had no effect with OpenSSL before version 1.1.1l. Python 3.8.9, 3.9.3, and 3.10 include workarounds for previous versions.
