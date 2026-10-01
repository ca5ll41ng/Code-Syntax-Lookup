---
id: "java-en-function-cryptoallpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "CryptoAllPermission.implies"
signature: "public boolean implies(Permission p)"
title: "CryptoAllPermission.implies"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoAllPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoAllPermission.implies

```java
public boolean implies(Permission p)
```

Checks if the specified permission is implied by
 this object.

**参数**

- **p** — the permission to check against.

**返回**

- `true` if the specified permission is an instance of `CryptoPermission`.
