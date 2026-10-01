---
id: "java-en-function-rmiclassloader-getsecuritycontext"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoader.getSecurityContext"
signature: "public static Object getSecurityContext(ClassLoader loader)"
title: "RMIClassLoader.getSecurityContext"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoader.getSecurityContext

```java
public static Object getSecurityContext(ClassLoader loader)
```

Always returns null.

**参数**

- **loader** — a class loader from which to get the security context

**返回**

- null

> **⚠ Deprecated** — no replacement. This method has no purpose in the absence of a Security Manager.
