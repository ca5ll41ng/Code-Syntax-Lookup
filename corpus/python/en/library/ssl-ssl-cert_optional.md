---
id: "python-en-function-ssl-cert_optional"
language: "python"
lang: "en"
category: "function"
name: "CERT_OPTIONAL"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.CERT_OPTIONAL"
license: "PSF"
updated: "2026-10-01"
---

# CERT_OPTIONAL

Possible value for `SSLContext.verify_mode`.
In client mode, `CERT_OPTIONAL`
has the same meaning as `CERT_REQUIRED`. It is recommended to
use `CERT_REQUIRED` for client-side sockets instead.

In server mode, a client certificate request is sent to the client.  The
client may either ignore the request or send a certificate in order
perform TLS client cert authentication.  If the client chooses to send
a certificate, it is verified.  Any verification error immediately aborts
the TLS handshake.

Use of this setting requires a valid set of CA certificates to
be passed to `SSLContext.load_verify_locations`.
