---
id: "python-en-function-ssl-verify_crl_check_leaf"
language: "python"
lang: "en"
category: "function"
name: "VERIFY_CRL_CHECK_LEAF"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.VERIFY_CRL_CHECK_LEAF"
license: "PSF"
updated: "2026-10-01"
---

# VERIFY_CRL_CHECK_LEAF

Possible value for `SSLContext.verify_flags`. In this mode, only the
peer cert is checked but none of the intermediate CA certificates. The mode
requires a valid CRL that is signed by the peer cert's issuer (its direct
ancestor CA). If no proper CRL has been loaded with
`SSLContext.load_verify_locations`, validation will fail.

> *Added in 3.4*
