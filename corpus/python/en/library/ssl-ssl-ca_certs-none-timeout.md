---
id: "python-en-function-ssl-ca_certs-none-timeout"
language: "python"
lang: "en"
category: "function"
name: "ca_certs=None[, timeout])"
directive: "function"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.ca_certs=None[, timeout])"
license: "PSF"
updated: "2026-10-01"
---

# ca_certs=None[, timeout])

Given the address `addr` of an SSL-protected server, as a (*hostname*,
*port-number*) pair, fetches the server's certificate, and returns it as a
PEM-encoded string.  If `ssl_version` is specified, uses that version of
the SSL protocol to attempt to connect to the server.  If *ca_certs* is
specified, it should be a file containing a list of root certificates, the
same format as used for the *cafile* parameter in
`SSLContext.load_verify_locations`.  The call will attempt to validate the
server certificate against that set of root certificates, and will fail
if the validation attempt fails.  A timeout can be specified with the
`timeout` parameter.

> *Changed in 3.3*: This function is now IPv6-compatible.

> *Changed in 3.5*: The default *ssl_version* is changed from :data:`PROTOCOL_SSLv3` to :data:`PROTOCOL_TLS` for maximum compatibility with modern servers.

> *Changed in 3.10*: The *timeout* parameter was added.
