---
id: "java-en-function-permissioncollection-add"
language: "java"
lang: "en"
category: "function"
name: "PermissionCollection.add"
signature: "public abstract void add(Permission permission)"
title: "PermissionCollection.add"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PermissionCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PermissionCollection.add

```java
public abstract void add(Permission permission)
```

Adds a permission object to the current collection of permission objects.

**参数**

- **permission** — the Permission object to add.

**异常**

- **SecurityException** — if this `PermissionCollection` object has been marked readonly
- **IllegalArgumentException** — if this `PermissionCollection` object is a homogeneous collection and the permission is not of the correct type.
