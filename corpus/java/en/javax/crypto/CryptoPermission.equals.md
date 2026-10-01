---
id: "java-en-function-cryptopermission-equals"
language: "java"
lang: "en"
category: "function"
name: "CryptoPermission.equals"
signature: "public boolean equals(Object obj)"
title: "CryptoPermission.equals"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoPermission.equals

```java
public boolean equals(Object obj)
```

Checks two `CryptoPermission` objects for equality.
 Checks that `obj` is a `CryptoPermission`
 object, and has the same algorithm name,
 exemption mechanism name, maximum allowable key size and
 algorithm parameter spec as this object.

**参数**

- **obj** — the object to test for equality with this object.

**返回**

- `true` if `obj` is equal to this object.
