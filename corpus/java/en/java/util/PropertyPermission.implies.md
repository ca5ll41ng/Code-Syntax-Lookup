---
id: "java-en-function-propertypermission-implies"
language: "java"
lang: "en"
category: "function"
name: "PropertyPermission.implies"
signature: "public boolean implies(Permission p)"
title: "PropertyPermission.implies"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyPermission.implies

```java
public boolean implies(Permission p)
```

Checks if this PropertyPermission object "implies" the specified
 permission.
 

 More specifically, this method returns true if:
 
 
-  p is an instanceof PropertyPermission,
 
-  p's actions are a subset of this
 object's actions, and
 
-  p's name is implied by this object's
      name. For example, "java.*" implies "java.home".

**参数**

- **p** — the permission to check against.

**返回**

- true if the specified permission is implied by this object, false if not.
