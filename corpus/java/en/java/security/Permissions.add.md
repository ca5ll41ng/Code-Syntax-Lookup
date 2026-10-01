---
id: "java-en-function-permissions-add"
language: "java"
lang: "en"
category: "function"
name: "Permissions.add"
signature: "public void add(Permission permission)"
title: "Permissions.add"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permissions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permissions.add

```java
public void add(Permission permission)
```

Adds a `Permission` object to the `PermissionCollection`
 for the class the permission belongs to. For example,
 if permission is a `FilePermission`, it is added to
 the `FilePermissionCollection` stored in this
 `Permissions` object.

 This method creates a new `PermissionCollection` object
 (and adds the permission to it) if an appropriate collection does
 not yet exist.

**参数**

- **permission** — the `Permission` object to add.

**异常**

- **SecurityException** — if this `Permissions` object is marked as readonly.

**参见**

- PermissionCollection#isReadOnly()
