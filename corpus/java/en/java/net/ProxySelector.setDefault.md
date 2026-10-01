---
id: "java-en-function-proxyselector-setdefault"
language: "java"
lang: "en"
category: "function"
name: "ProxySelector.setDefault"
signature: "public static void setDefault(ProxySelector ps)"
title: "ProxySelector.setDefault"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ProxySelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProxySelector.setDefault

```java
public static void setDefault(ProxySelector ps)
```

Sets (or unsets) the system-wide proxy selector.

 Note: non-standard protocol handlers may ignore this setting.

**参数**

- **ps** — The HTTP proxy selector, or `null` to unset the proxy selector.

**参见**

- #getDefault()

> *Since 1.5*
