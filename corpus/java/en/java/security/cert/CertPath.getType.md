---
id: "java-en-function-certpath-gettype"
language: "java"
lang: "en"
category: "function"
name: "CertPath.getType"
signature: "public String getType()"
title: "CertPath.getType"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPath.getType

```java
public String getType()
```

Returns the type of `Certificate`s in this certification
 path. This is the same string that would be returned by
 `getType`
 for all `Certificate`s in the certification path.

**返回**

- the type of `Certificate`s in this certification path (never null)
