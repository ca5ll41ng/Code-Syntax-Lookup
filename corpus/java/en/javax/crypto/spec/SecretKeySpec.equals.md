---
id: "java-en-function-secretkeyspec-equals"
language: "java"
lang: "en"
category: "function"
name: "SecretKeySpec.equals"
signature: "public boolean equals(Object obj)"
title: "SecretKeySpec.equals"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/SecretKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecretKeySpec.equals

```java
public boolean equals(Object obj)
```

Tests for equality between the specified object and this
 object. Two SecretKeySpec objects are considered equal if
 they are both SecretKey instances which have the
 same case-insensitive algorithm name and key encoding.

**参数**

- **obj** — the object to test for equality with this object.

**返回**

- true if the objects are considered equal, false if obj is null or otherwise.
