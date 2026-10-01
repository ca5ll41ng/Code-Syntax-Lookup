---
id: "java-en-function-cryptoallpermissioncollection-add"
language: "java"
lang: "en"
category: "function"
name: "CryptoAllPermissionCollection.add"
signature: "public void add(Permission permission)"
title: "CryptoAllPermissionCollection.add"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoAllPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoAllPermissionCollection.add

```java
public void add(Permission permission)
```

Adds a permission to `CryptoAllPermission` object.

**参数**

- **permission** — the `Permission` object to add.

**异常**

- **SecurityException** — if this `CryptoAllPermissionCollection` object has been marked readonly
