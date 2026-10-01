---
id: "python-en-function-http-client-skip_accept_encoding-false"
language: "python"
lang: "en"
category: "function"
name: "skip_accept_encoding=False)"
directive: "method"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.skip_accept_encoding=False)"
license: "PSF"
updated: "2026-10-01"
---

# skip_accept_encoding=False)

This should be the first call after the connection to the server has been
made. It sends a line to the server consisting of the *method* string,
the *url* string, and the HTTP version (`HTTP/1.1`).  To disable automatic
sending of `Host:` or `Accept-Encoding:` headers (for example to accept
additional content encodings), specify *skip_host* or *skip_accept_encoding*
with non-False values.
