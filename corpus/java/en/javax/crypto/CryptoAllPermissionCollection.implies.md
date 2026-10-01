---
id: "java-en-function-cryptoallpermissioncollection-implies"
language: "java"
lang: "en"
category: "function"
name: "CryptoAllPermissionCollection.implies"
signature: "public boolean implies(Permission permission)"
title: "CryptoAllPermissionCollection.implies"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoAllPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoAllPermissionCollection.implies

```java
public boolean implies(Permission permission)
```

Check and see if this set of permissions implies the permissions
 expressed in "permission".

**参数**

- **permission** — the `Permission` object to compare

**返回**

- `true` if the given permission is implied by this `CryptoAllPermissionCollection` object.
