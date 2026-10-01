---
id: "python-en-function-ssl-sslsocket-get_verified_chain"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.get_verified_chain"
signature: "SSLSocket.get_verified_chain()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.get_verified_chain"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.get_verified_chain

Returns verified certificate chain provided by the other
end of the SSL channel as a list of DER-encoded bytes.
If certificate verification was disabled method acts the same as
`~SSLSocket.get_unverified_chain`.

> *Added in 3.13*
