---
id: "java-en-function-system-getsecuritymanager"
language: "java"
lang: "en"
category: "function"
name: "System.getSecurityManager"
signature: "public static SecurityManager getSecurityManager()"
title: "System.getSecurityManager"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.getSecurityManager

```java
public static SecurityManager getSecurityManager()
```

Returns `null`. Setting a security manager is not supported.

**返回**

- `null`

**参见**

- #setSecurityManager

> **⚠ Deprecated** — This method originally returned `SecurityManager the system-wide Security Manager`. Setting a Security Manager is no longer supported. There is no replacement for the Security Manager or this method.
