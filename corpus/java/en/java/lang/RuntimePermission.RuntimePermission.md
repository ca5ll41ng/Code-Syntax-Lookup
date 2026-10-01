---
id: "java-en-function-runtimepermission-runtimepermission"
language: "java"
lang: "en"
category: "function"
name: "RuntimePermission.RuntimePermission"
signature: "public RuntimePermission(String name)"
title: "RuntimePermission.RuntimePermission"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/RuntimePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimePermission.RuntimePermission

```java
public RuntimePermission(String name)
```

Creates a new RuntimePermission with the specified name.
 The name is the symbolic name of the RuntimePermission, such as
 "exit", "setFactory", etc. An asterisk
 may appear at the end of the name, following a ".", or by itself, to
 signify a wildcard match.

**参数**

- **name** — the name of the RuntimePermission.

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if `name` is empty.
