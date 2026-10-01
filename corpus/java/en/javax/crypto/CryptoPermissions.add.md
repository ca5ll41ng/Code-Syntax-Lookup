---
id: "java-en-function-cryptopermissions-add"
language: "java"
lang: "en"
category: "function"
name: "CryptoPermissions.add"
signature: "public void add(Permission permission)"
title: "CryptoPermissions.add"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoPermissions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoPermissions.add

```java
public void add(Permission permission)
```

Adds a permission object to the
 `PermissionCollection` for the algorithm returned by
 `(CryptoPermission)permission.getAlgorithm()`.

 This method creates
 a new `PermissionCollection` object (and adds the
 permission to it) if an appropriate collection does not yet exist.

**参数**

- **permission** — the `Permission` object to add.

**异常**

- **SecurityException** — if this `CryptoPermissions` object is marked as readonly.

**参见**

- PermissionCollection#isReadOnly
