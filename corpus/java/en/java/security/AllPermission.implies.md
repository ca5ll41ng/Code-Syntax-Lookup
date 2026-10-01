---
id: "java-en-function-allpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "AllPermission.implies"
signature: "public boolean implies(Permission p)"
title: "AllPermission.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AllPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AllPermission.implies

```java
public boolean implies(Permission p)
```

Checks if the specified permission is "implied" by
 this object. This method always returns `true`.

**参数**

- **p** — the permission to check against.

**返回**

- return
