---
id: "java-en-function-basicpermissioncollection-add"
language: "java"
lang: "en"
category: "function"
name: "BasicPermissionCollection.add"
signature: "public void add(Permission permission)"
title: "BasicPermissionCollection.add"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/BasicPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicPermissionCollection.add

```java
public void add(Permission permission)
```

Adds a permission to the `BasicPermission` object.
 The key for the hash is permission.path.

**参数**

- **permission** — the `Permission` object to add.

**异常**

- **IllegalArgumentException** — if the permission is not a `BasicPermission`, or if the permission is not of the same class as the other permissions in this collection.
- **SecurityException** — if this `BasicPermissionCollection` object has been marked readonly
