---
id: "java-en-function-codesource-getcertificates"
language: "java"
lang: "en"
category: "function"
name: "CodeSource.getCertificates"
signature: "public final java.security.cert.Certificate[] getCertificates()"
title: "CodeSource.getCertificates"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/CodeSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeSource.getCertificates

```java
public final java.security.cert.Certificate[] getCertificates()
```

Returns the certificates associated with this `CodeSource`.
 

 If this `CodeSource` object was created using the
 `CodeSource`
 constructor then its certificate chains are extracted and used to
 create an array of `Certificate` objects. Each signer certificate
 is followed by its supporting certificate chain (which may be empty).
 Each signer certificate and its supporting certificate chain is ordered
 bottom-to-top (i.e., with the signer certificate first and the (root)
 certificate authority last).

**返回**

- a copy of the certificate array, or `null` if there is none.
