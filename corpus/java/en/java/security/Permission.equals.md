---
id: "java-en-function-permission-equals"
language: "java"
lang: "en"
category: "function"
name: "Permission.equals"
signature: "public abstract boolean equals(Object obj)"
title: "Permission.equals"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permission.equals

```java
public abstract boolean equals(Object obj)
```

Checks two `Permission` objects for equality.
 

 Do not use the `equals` method for making access control
 decisions; use the `implies` method.

**参数**

- **obj** — the object we are testing for equality with this object.

**返回**

- `true` if both `Permission` objects are equivalent.
