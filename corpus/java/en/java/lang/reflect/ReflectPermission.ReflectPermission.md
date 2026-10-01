---
id: "java-en-function-reflectpermission-reflectpermission"
language: "java"
lang: "en"
category: "function"
name: "ReflectPermission.ReflectPermission"
signature: "public ReflectPermission(String name)"
title: "ReflectPermission.ReflectPermission"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/ReflectPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReflectPermission.ReflectPermission

```java
public ReflectPermission(String name)
```

Constructs a ReflectPermission with the specified name.

**参数**

- **name** — the name of the ReflectPermission

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if `name` is empty.
