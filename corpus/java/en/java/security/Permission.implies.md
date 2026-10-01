---
id: "java-en-function-permission-implies"
language: "java"
lang: "en"
category: "function"
name: "Permission.implies"
signature: "public abstract boolean implies(Permission permission)"
title: "Permission.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permission.implies

```java
public abstract boolean implies(Permission permission)
```

Checks if the specified permission's actions are "implied by"
 this object's actions.
 

 This must be implemented by subclasses of `Permission`, as they
 are the only ones that can impose semantics on a `Permission`
 object.

**参数**

- **permission** — the permission to check against.

**返回**

- `true` if the specified permission is implied by this object, `false` if not.
