---
id: "java-en-function-cryptopermissioncollection-add"
language: "java"
lang: "en"
category: "function"
name: "CryptoPermissionCollection.add"
signature: "public void add(Permission permission)"
title: "CryptoPermissionCollection.add"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoPermissionCollection.add

```java
public void add(Permission permission)
```

Adds a permission to the `CryptoPermissionCollection` object.

**参数**

- **permission** — the `Permission` object to add.

**异常**

- **SecurityException** — if this `CryptoPermissionCollection` object has been marked readOnly.
