---
id: "java-en-function-responsecache-setdefault"
language: "java"
lang: "en"
category: "function"
name: "ResponseCache.setDefault"
signature: "public static synchronized void setDefault(ResponseCache responseCache)"
title: "ResponseCache.setDefault"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ResponseCache.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResponseCache.setDefault

```java
public static synchronized void setDefault(ResponseCache responseCache)
```

Sets (or unsets) the system-wide cache.

 Note: non-standard protocol handlers may ignore this setting.

**参数**

- **responseCache** — The response cache, or `null` to unset the cache.

**参见**

- #getDefault()

> *Since 1.5*
