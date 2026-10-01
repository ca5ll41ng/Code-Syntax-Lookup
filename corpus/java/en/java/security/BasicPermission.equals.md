---
id: "java-en-function-basicpermission-equals"
language: "java"
lang: "en"
category: "function"
name: "BasicPermission.equals"
signature: "public boolean equals(Object obj)"
title: "BasicPermission.equals"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/BasicPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicPermission.equals

```java
public boolean equals(Object obj)
```

Checks two `BasicPermission` objects for equality.
 Checks that `obj`'s class is the same as this object's class
 and has the same name as this object.

**参数**

- **obj** — the object we are testing for equality with this object.

**返回**

- `true` if `obj`'s class is the same as this object's class and has the same name as this `BasicPermission` object, `false` otherwise.
