---
id: "java-en-function-permission-tostring"
language: "java"
lang: "en"
category: "function"
name: "Permission.toString"
signature: "public String toString()"
title: "Permission.toString"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permission.toString

```java
public String toString()
```

Returns a string describing this `Permission`.  The convention
 is to specify the class name, the permission name, and the actions in
 the following format: '("ClassName" "name" "actions")', or
 '("ClassName" "name")' if actions list is `null` or empty.

**返回**

- information about this `Permission`.
