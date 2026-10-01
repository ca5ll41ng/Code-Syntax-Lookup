---
id: "java-en-function-java-security-pem"
language: "java"
lang: "en"
category: "function"
name: "java.security.PEM"
title: "PEM"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEM

A `BinaryEncodable` representing a Privacy-Enhanced Mail (PEM) structure
 composed of a type identifier, Base64-encoded content, and optional
 leading data that precedes the PEM header.

 

The `type` is the label in the PEM header, following the
 `BEGIN` keyword and excluding the encapsulation boundaries.
 Common `type` values include, but are not limited to:
 CERTIFICATE, CERTIFICATE REQUEST, ATTRIBUTE CERTIFICATE, X509 CRL, PKCS7,
 CMS, PRIVATE KEY, ENCRYPTED PRIVATE KEY, and PUBLIC KEY.

 

Instances of this class are returned by `decode`
 and `decode` when the content cannot be represented
 as a cryptographic object. To explicitly retrieve a `PEM` instance
 with access to the leading data, use `decode`
 or `decode` with `PEM.class` as the
 type.

 

A `PEM` object can be encoded to its textual representation by
 invoking `toString` or by using `PEMEncoder`.

 

To construct a `PEM` instance, `type` and
 `base64Content` must be non-`null`. For constructors that accept
 `leadingData`, it must also be non-`null`.

 

No validation is performed to ensure that the `type` conforms to
 RFC 7468 or legacy formats, or that the content corresponds to the declared
 `type`.

       RFC 7468: Textual Encodings of PKIX, PKCS, and CMS Structures

**参见**

- PEMDecoder
- PEMEncoder

> *Since 28*
