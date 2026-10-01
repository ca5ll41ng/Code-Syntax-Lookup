---
id: "java-en-function-codesource-equals"
language: "java"
lang: "en"
category: "function"
name: "CodeSource.equals"
signature: "public boolean equals(Object obj)"
title: "CodeSource.equals"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/CodeSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeSource.equals

```java
public boolean equals(Object obj)
```

Tests for equality between the specified object and this
 object. Two `CodeSource` objects are considered equal if their
 locations are of identical value and if their signer certificate
 chains are of identical value. It is not required that
 the certificate chains be in the same order.

**参数**

- **obj** — the object to test for equality with this object.

**返回**

- `true` if the objects are considered equal, `false` otherwise.
