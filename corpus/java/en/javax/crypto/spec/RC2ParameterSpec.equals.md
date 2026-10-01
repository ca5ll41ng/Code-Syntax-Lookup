---
id: "java-en-function-rc2parameterspec-equals"
language: "java"
lang: "en"
category: "function"
name: "RC2ParameterSpec.equals"
signature: "public boolean equals(Object obj)"
title: "RC2ParameterSpec.equals"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/RC2ParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RC2ParameterSpec.equals

```java
public boolean equals(Object obj)
```

Tests for equality between the specified object and this
 object. Two RC2ParameterSpec objects are considered equal if their
 effective key sizes and IVs are equal.
 (Two IV references are considered equal if both are `null`.)

**参数**

- **obj** — the object to test for equality with this object.

**返回**

- true if the objects are considered equal, false if `obj` is null or otherwise.
