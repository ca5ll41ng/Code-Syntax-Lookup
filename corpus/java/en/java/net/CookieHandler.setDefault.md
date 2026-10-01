---
id: "java-en-function-cookiehandler-setdefault"
language: "java"
lang: "en"
category: "function"
name: "CookieHandler.setDefault"
signature: "public static synchronized void setDefault(CookieHandler cHandler)"
title: "CookieHandler.setDefault"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieHandler.setDefault

```java
public static synchronized void setDefault(CookieHandler cHandler)
```

Sets (or unsets) the system-wide cookie handler.

 Note: non-standard http protocol handlers may ignore this setting.

**参数**

- **cHandler** — The HTTP cookie handler, or `null` to unset.

**参见**

- #getDefault()
