---
id: "java-en-function-certificaterevokedexception-getextensions"
language: "java"
lang: "en"
category: "function"
name: "CertificateRevokedException.getExtensions"
signature: "public Map<String, Extension> getExtensions()"
title: "CertificateRevokedException.getExtensions"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateRevokedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateRevokedException.getExtensions

```java
public Map<String, Extension> getExtensions()
```

Returns a map of X.509 extensions containing additional information
 about the revoked certificate, such as the Invalidity Date
 Extension. Each key is an OID String that maps to the corresponding
 Extension.

**返回**

- an unmodifiable map of X.509 extensions, or an empty map if there are no extensions
