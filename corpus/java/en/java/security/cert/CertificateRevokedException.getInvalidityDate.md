---
id: "java-en-function-certificaterevokedexception-getinvaliditydate"
language: "java"
lang: "en"
category: "function"
name: "CertificateRevokedException.getInvalidityDate"
signature: "public Date getInvalidityDate()"
title: "CertificateRevokedException.getInvalidityDate"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateRevokedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateRevokedException.getInvalidityDate

```java
public Date getInvalidityDate()
```

Returns the invalidity date, as specified in the Invalidity Date
 extension of this `CertificateRevokedException`. The
 invalidity date is the date on which it is known or suspected that the
 private key was compromised or that the certificate otherwise became
 invalid. This implementation calls `getExtensions()` and
 checks the returned map for an entry for the Invalidity Date extension
 OID ("2.5.29.24"). If found, it returns the invalidity date in the
 extension; otherwise null. A new Date object is returned each time the
 method is invoked to protect against subsequent modification.

**返回**

- the invalidity date, or `null` if not specified
