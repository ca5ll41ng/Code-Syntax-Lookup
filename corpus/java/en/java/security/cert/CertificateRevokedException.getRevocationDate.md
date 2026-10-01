---
id: "java-en-function-certificaterevokedexception-getrevocationdate"
language: "java"
lang: "en"
category: "function"
name: "CertificateRevokedException.getRevocationDate"
signature: "public Date getRevocationDate()"
title: "CertificateRevokedException.getRevocationDate"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateRevokedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateRevokedException.getRevocationDate

```java
public Date getRevocationDate()
```

Returns the date on which the certificate was revoked. A new copy is
 returned each time the method is invoked to protect against subsequent
 modification.

**返回**

- the revocation date
