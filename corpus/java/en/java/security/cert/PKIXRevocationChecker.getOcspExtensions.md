---
id: "java-en-function-pkixrevocationchecker-getocspextensions"
language: "java"
lang: "en"
category: "function"
name: "PKIXRevocationChecker.getOcspExtensions"
signature: "public List<Extension> getOcspExtensions()"
title: "PKIXRevocationChecker.getOcspExtensions"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXRevocationChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXRevocationChecker.getOcspExtensions

```java
public List<Extension> getOcspExtensions()
```

Gets the optional OCSP request extensions.

**返回**

- an unmodifiable list of extensions. The list is empty if no extensions have been specified.
