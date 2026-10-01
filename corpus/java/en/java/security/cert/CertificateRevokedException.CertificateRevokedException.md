---
id: "java-en-function-certificaterevokedexception-certificaterevokedexception"
language: "java"
lang: "en"
category: "function"
name: "CertificateRevokedException.CertificateRevokedException"
signature: "public CertificateRevokedException(Date revocationDate, CRLReason reason, X500Principal authority, Map<String, Extension> extensions)"
title: "CertificateRevokedException.CertificateRevokedException"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateRevokedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateRevokedException.CertificateRevokedException

```java
public CertificateRevokedException(Date revocationDate, CRLReason reason, X500Principal authority, Map<String, Extension> extensions)
```

Constructs a `CertificateRevokedException` with
 the specified revocation date, reason code, authority name, and map
 of extensions.

**参数**

- **revocationDate** — the date on which the certificate was revoked. The date is copied to protect against subsequent modification.
- **reason** — the revocation reason
- **authority** — the `X500Principal` that represents the name of the authority that signed the certificate's revocation status information
- **extensions** — a map of X.509 Extensions. Each key is an OID String that maps to the corresponding Extension. The map is copied to prevent subsequent modification.

**异常**

- **NullPointerException** — if `revocationDate`, `reason`, `authority`, or `extensions` is `null`
- **ClassCastException** — if `extensions` contains an incorrectly typed key or value
