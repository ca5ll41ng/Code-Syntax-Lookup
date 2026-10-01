---
id: "java-en-function-cryptopermissioncollection-implies"
language: "java"
lang: "en"
category: "function"
name: "CryptoPermissionCollection.implies"
signature: "public boolean implies(Permission permission)"
title: "CryptoPermissionCollection.implies"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoPermissionCollection.implies

```java
public boolean implies(Permission permission)
```

Check and see if this `CryptoPermission` object implies
 the given `Permission` object.

**参数**

- **permission** — the `Permission` object to compare

**返回**

- `true` if the given permission is implied by this `CryptoPermissionCollection`, `false` if not.
