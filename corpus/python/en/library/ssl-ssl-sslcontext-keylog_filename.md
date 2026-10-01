---
id: "python-en-function-ssl-sslcontext-keylog_filename"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.keylog_filename"
directive: "attribute"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.keylog_filename"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.keylog_filename

Write TLS keys to a keylog file, whenever key material is generated or
received. The keylog file is designed for debugging purposes only. The
file format is specified by NSS and used by many traffic analyzers such
as Wireshark. The log file is opened in append-only mode. Writes are
synchronized between threads, but not between processes.

> *Added in 3.8*
