---
id: "python-en-function-ssl-sslsocket-verify_client_post_handshake"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.verify_client_post_handshake"
signature: "SSLSocket.verify_client_post_handshake()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.verify_client_post_handshake"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.verify_client_post_handshake

Requests post-handshake authentication (PHA) from a TLS 1.3 client. PHA
can only be initiated for a TLS 1.3 connection from a server-side socket,
after the initial TLS handshake and with PHA enabled on both sides, see
`SSLContext.post_handshake_auth`.

The method does not perform a cert exchange immediately. The server-side
sends a CertificateRequest during the next write event and expects the
client to respond with a certificate on the next read event.

If any precondition isn't met (e.g. not TLS 1.3, PHA not enabled), an
`SSLError` is raised.

> **Note**
>
> Only available with OpenSSL 1.1.1 and TLS 1.3 enabled. Without TLS 1.3
> support, the method raises `NotImplementedError`.
>

> *Added in 3.8*
