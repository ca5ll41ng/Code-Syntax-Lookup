---
id: "java-en-function-unresolvedpermission-tostring"
language: "java"
lang: "en"
category: "function"
name: "UnresolvedPermission.toString"
signature: "public String toString()"
title: "UnresolvedPermission.toString"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/UnresolvedPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnresolvedPermission.toString

```java
public String toString()
```

Returns a string describing this `UnresolvedPermission`.
 The convention is to specify the class name, the permission name,
 and the actions, in the following format:
 '(unresolved "ClassName" "name" "actions")'.

**返回**

- information about this `UnresolvedPermission`.
