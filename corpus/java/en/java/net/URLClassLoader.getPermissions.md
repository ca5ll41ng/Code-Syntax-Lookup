---
id: "java-en-function-urlclassloader-getpermissions"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.getPermissions"
signature: "protected PermissionCollection getPermissions(CodeSource codesource)"
title: "URLClassLoader.getPermissions"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.getPermissions

```java
protected PermissionCollection getPermissions(CodeSource codesource)
```

{@return an `PermissionCollection empty Permission collection`}

**参数**

- **codesource** — the `CodeSource`

**异常**

- **NullPointerException** — if `codesource` is `null`.
