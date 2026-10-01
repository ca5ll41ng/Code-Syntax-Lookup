---
id: "java-en-function-allpermissioncollection-add"
language: "java"
lang: "en"
category: "function"
name: "AllPermissionCollection.add"
signature: "public void add(Permission permission)"
title: "AllPermissionCollection.add"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AllPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AllPermissionCollection.add

```java
public void add(Permission permission)
```

Adds a permission to the `AllPermissionCollection` object.
 The key for the hash is `permission.path`.

**参数**

- **permission** — the `Permission` object to add.

**异常**

- **IllegalArgumentException** — if the permission is not an `AllPermission`
- **SecurityException** — if this `AllPermissionCollection` object has been marked readonly
