---
id: "java-en-function-cookiehandler-getdefault"
language: "java"
lang: "en"
category: "function"
name: "CookieHandler.getDefault"
signature: "public static synchronized CookieHandler getDefault()"
title: "CookieHandler.getDefault"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieHandler.getDefault

```java
public static synchronized CookieHandler getDefault()
```

Gets the system-wide cookie handler.

**返回**

- the system-wide cookie handler; A null return means there is no system-wide cookie handler currently set.

**参见**

- #setDefault(CookieHandler)
