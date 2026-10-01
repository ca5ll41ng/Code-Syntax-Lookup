---
id: "java-en-function-certpath-getcertificates"
language: "java"
lang: "en"
category: "function"
name: "CertPath.getCertificates"
signature: "public abstract List<? extends Certificate> getCertificates()"
title: "CertPath.getCertificates"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPath.getCertificates

```java
public abstract List<? extends Certificate> getCertificates()
```

Returns the list of certificates in this certification path.
 The `List` returned must be immutable and thread-safe.

**返回**

- an immutable `List` of `Certificate`s (may be empty, but not null)
