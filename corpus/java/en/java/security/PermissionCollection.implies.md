---
id: "java-en-function-permissioncollection-implies"
language: "java"
lang: "en"
category: "function"
name: "PermissionCollection.implies"
signature: "public abstract boolean implies(Permission permission)"
title: "PermissionCollection.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PermissionCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PermissionCollection.implies

```java
public abstract boolean implies(Permission permission)
```

Checks to see if the specified permission is implied by
 the collection of `Permission` objects held in this
 `PermissionCollection`.

**参数**

- **permission** — the `Permission` object to compare.

**返回**

- `true` if "permission" is implied by the  permissions in the collection, `false` if not.
