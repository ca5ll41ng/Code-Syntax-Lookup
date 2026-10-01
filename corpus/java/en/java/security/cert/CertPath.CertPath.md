---
id: "java-en-function-certpath-certpath"
language: "java"
lang: "en"
category: "function"
name: "CertPath.CertPath"
signature: "protected CertPath(String type)"
title: "CertPath.CertPath"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPath.CertPath

```java
protected CertPath(String type)
```

Creates a `CertPath` of the specified type.
 

 This constructor is protected because most users should use a
 `CertificateFactory` to create `CertPath`s.

**参数**

- **type** — the standard name of the type of `Certificate`s in this path
