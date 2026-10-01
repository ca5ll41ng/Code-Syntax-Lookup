---
id: "java-en-function-codesigner-equals"
language: "java"
lang: "en"
category: "function"
name: "CodeSigner.equals"
signature: "public boolean equals(Object obj)"
title: "CodeSigner.equals"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/CodeSigner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeSigner.equals

```java
public boolean equals(Object obj)
```

Tests for equality between the specified object and this
 code signer. Two code signers are considered equal if their
 signer certificate paths are equal and if their timestamps are equal,
 if present in both.

**参数**

- **obj** — the object to test for equality with this object.

**返回**

- `true` if the objects are considered equal, `false` otherwise.
