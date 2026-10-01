---
id: "java-en-function-linkpermission-linkpermission"
language: "java"
lang: "en"
category: "function"
name: "LinkPermission.LinkPermission"
signature: "public LinkPermission(String name)"
title: "LinkPermission.LinkPermission"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/LinkPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkPermission.LinkPermission

```java
public LinkPermission(String name)
```

Constructs a `LinkPermission` with the specified name.

**参数**

- **name** — the name of the permission. It must be "hard" or "symbolic".

**异常**

- **IllegalArgumentException** — if name is empty or invalid
