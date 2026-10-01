---
id: "python-zh-function-ssl-enum_certificates"
language: "python"
lang: "zh"
category: "function"
name: "enum_certificates"
signature: "enum_certificates(store_name)"
directive: "function"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.enum_certificates"
license: "PSF"
updated: "2026-10-01"
---

# enum_certificates

Retrieve certificates from Windows' system cert store. *store_name* may be
one of `CA`, `ROOT` or `MY`. Windows may provide additional cert
stores, too.

The function returns a list of (cert_bytes, encoding_type, trust) tuples.
The encoding_type specifies the encoding of cert_bytes. It is either
`x509_asn` for X.509 ASN.1 data or `pkcs_7_asn` for
PKCS#7 ASN.1 data. Trust specifies the purpose of the certificate as a set
of OIDS or exactly `True` if the certificate is trustworthy for all
purposes.

示例::

   >>> ssl.enum_certificates("CA")
   [(b'data...', 'x509_asn', {'1.3.6.1.5.5.7.3.1', '1.3.6.1.5.5.7.3.2'}),
    (b'data...', 'x509_asn', True)]

availability:: Windows.

> *Added in 3.4*
