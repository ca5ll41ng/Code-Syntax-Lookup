---
id: "java-en-function-cryptopermissions-implies"
language: "java"
lang: "en"
category: "function"
name: "CryptoPermissions.implies"
signature: "public boolean implies(Permission permission)"
title: "CryptoPermissions.implies"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoPermissions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoPermissions.implies

```java
public boolean implies(Permission permission)
```

Checks if this object's `PermissionCollection` for permissions
 of the specified permission's algorithm implies the specified
 permission. Returns `true` if the checking succeeded.

**参数**

- **permission** — the `Permission` object to check.

**返回**

- `true` if `permission` is implied by the permissions in the `PermissionCollection` it belongs to, `false` if not.
