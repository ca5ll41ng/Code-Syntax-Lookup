---
id: "java-en-function-urlconnection-setdefaultrequestproperty"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.setDefaultRequestProperty"
signature: "public static void setDefaultRequestProperty(String key, String value)"
title: "URLConnection.setDefaultRequestProperty"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.setDefaultRequestProperty

```java
public static void setDefaultRequestProperty(String key, String value)
```

Sets the default value of a general request property. When a
 `URLConnection` is created, it is initialized with
 these properties.

**参数**

- **key** — the keyword by which the request is known (e.g., "`Accept`").
- **value** — the value associated with the key.

**参见**

- java.net.URLConnection#setRequestProperty(java.lang.String,java.lang.String)
- #getDefaultRequestProperty(java.lang.String)

> **⚠ Deprecated** — The instance specific setRequestProperty method should be used after an appropriate instance of URLConnection is obtained. Invoking this method will have no effect.
