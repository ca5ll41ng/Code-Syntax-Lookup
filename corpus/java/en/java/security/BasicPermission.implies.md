---
id: "java-en-function-basicpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "BasicPermission.implies"
signature: "public boolean implies(Permission p)"
title: "BasicPermission.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/BasicPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicPermission.implies

```java
public boolean implies(Permission p)
```

Checks if the specified permission is "implied" by
 this object.
 

 More specifically, this method returns `true` if:
 
 
-  `p`'s class is the same as this object's class, and
 
-  `p`'s name equals or (in the case of wildcards)
      is implied by this object's
      name. For example, "a.b.*" implies "a.b.c".

**参数**

- **p** — the permission to check against.

**返回**

- `true` if the passed permission is equal to or implied by this permission, `false` otherwise.
