---
id: "python-en-function-ssl-cert_required"
language: "python"
lang: "en"
category: "function"
name: "CERT_REQUIRED"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.CERT_REQUIRED"
license: "PSF"
updated: "2026-10-01"
---

# CERT_REQUIRED

Possible value for `SSLContext.verify_mode`.
In this mode, certificates are
required from the other side of the socket connection; an `SSLError`
will be raised if no certificate is provided, or if its validation fails.
This mode is **not** sufficient to verify a certificate in client mode as
it does not match hostnames.  `~SSLContext.check_hostname` must be
enabled as well to verify the authenticity of a cert.
`PROTOCOL_TLS_CLIENT` uses `CERT_REQUIRED` and
enables `~SSLContext.check_hostname` by default.

With server socket, this mode provides mandatory TLS client cert
authentication.  A client certificate request is sent to the client and
the client must provide a valid and trusted certificate.

Use of this setting requires a valid set of CA certificates to
be passed to `SSLContext.load_verify_locations`.
