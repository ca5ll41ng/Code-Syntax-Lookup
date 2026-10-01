---
id: "java-en-function-system-setsecuritymanager"
language: "java"
lang: "en"
category: "function"
name: "System.setSecurityManager"
signature: "public static void setSecurityManager(@SuppressWarnings(\"removal\") SecurityManager sm)"
title: "System.setSecurityManager"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.setSecurityManager

```java
public static void setSecurityManager(@SuppressWarnings("removal") SecurityManager sm)
```

Throws `UnsupportedOperationException`. Setting a security manager
 is not supported.

**参数**

- **sm** — ignored

**异常**

- **UnsupportedOperationException** — always

**参见**

- #getSecurityManager

> **⚠ Deprecated** — This method originally set `SecurityManager the system-wide Security Manager`. Setting a Security Manager is no longer supported. There is no replacement for the Security Manager or this method.
