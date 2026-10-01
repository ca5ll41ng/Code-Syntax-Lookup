---
id: "java-en-function-certpath-equals"
language: "java"
lang: "en"
category: "function"
name: "CertPath.equals"
signature: "public boolean equals(Object other)"
title: "CertPath.equals"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPath.equals

```java
public boolean equals(Object other)
```

Compares this certification path for equality with the specified
 object. Two `CertPath`s are equal if and only if their
 types are equal and their certificate `List`s (and by
 implication the `Certificate`s in those `List`s)
 are equal. A `CertPath` is never equal to an object that is
 not a `CertPath`.
 

 This algorithm is implemented by this method. If it is overridden,
 the behavior specified here must be maintained.

**参数**

- **other** — the object to test for equality with this certification path

**返回**

- true if the specified object is equal to this certification path, false otherwise
