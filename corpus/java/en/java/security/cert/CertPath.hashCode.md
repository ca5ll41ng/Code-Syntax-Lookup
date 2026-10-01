---
id: "java-en-function-certpath-hashcode"
language: "java"
lang: "en"
category: "function"
name: "CertPath.hashCode"
signature: "public int hashCode()"
title: "CertPath.hashCode"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPath.hashCode

```java
public int hashCode()
```

{@return the hashcode value for this certification path}
 The hash code of a certification path is defined to be the result of
 the following calculation:
 
```
`hashCode = path.getType().hashCode();
  hashCode = 31*hashCode + path.getCertificates().hashCode();
 `
```

 This ensures that `path1.equals(path2)` implies that
 `path1.hashCode()==path2.hashCode()` for any two certification
 paths, `path1` and `path2`, as required by the
 general contract of `Object.hashCode`.
