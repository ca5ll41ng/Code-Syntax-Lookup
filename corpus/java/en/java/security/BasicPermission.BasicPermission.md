---
id: "java-en-function-basicpermission-basicpermission"
language: "java"
lang: "en"
category: "function"
name: "BasicPermission.BasicPermission"
signature: "public BasicPermission(String name)"
title: "BasicPermission.BasicPermission"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/BasicPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicPermission.BasicPermission

```java
public BasicPermission(String name)
```

Creates a new `BasicPermission` with the specified name.
 Name is the symbolic name of the permission, such as
 "setFactory",
 "print.queueJob", or "topLevelWindow", etc.

**参数**

- **name** — the name of the `BasicPermission`.

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if `name` is empty.
