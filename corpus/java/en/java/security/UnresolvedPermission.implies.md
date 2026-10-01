---
id: "java-en-function-unresolvedpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "UnresolvedPermission.implies"
signature: "public boolean implies(Permission p)"
title: "UnresolvedPermission.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/UnresolvedPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnresolvedPermission.implies

```java
public boolean implies(Permission p)
```

This method always returns `false` for unresolved permissions.
 That is, an `UnresolvedPermission` is never considered to
 imply another permission.

**参数**

- **p** — the permission to check against.

**返回**

- `false`.
