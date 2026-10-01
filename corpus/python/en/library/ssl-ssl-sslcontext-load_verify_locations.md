---
id: "python-en-function-ssl-sslcontext-load_verify_locations"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.load_verify_locations"
signature: "SSLContext.load_verify_locations(cafile=None, capath=None, cadata=None)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.load_verify_locations"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.load_verify_locations

Load a set of "certification authority" (CA) certificates used to validate
other peers' certificates when `verify_mode` is other than
`CERT_NONE`.  At least one of *cafile* or *capath* must be specified.

This method can also load certification revocation lists (CRLs) in PEM or
DER format. In order to make use of CRLs, `SSLContext.verify_flags`
must be configured properly.

The *cafile* string, if present, is the path to a file of concatenated
CA certificates in PEM format. See the discussion of
`ssl-certificates` for more information about how to arrange the
certificates in this file.

The *capath* string, if present, is
the path to a directory containing several CA certificates in PEM format,
following an `OpenSSL specific layout
<https://docs.openssl.org/master/man3/SSL_CTX_load_verify_locations/>`_.

The *cadata* object, if present, is either an ASCII string of one or more
PEM-encoded certificates or a `bytes-like object` of DER-encoded
certificates. Like with *capath* extra lines around PEM-encoded
certificates are ignored but at least one certificate must be present.

> *Changed in 3.4*: New optional argument *cadata*
