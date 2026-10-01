---
id: "java-en-function-urlconnection-getdefaultrequestproperty"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getDefaultRequestProperty"
signature: "public static String getDefaultRequestProperty(String key)"
title: "URLConnection.getDefaultRequestProperty"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getDefaultRequestProperty

```java
public static String getDefaultRequestProperty(String key)
```

Returns the value of the default request property. Default request
 properties are set for every connection.

**参数**

- **key** — the keyword by which the request is known (e.g., "Accept").

**返回**

- the value of the default request property for the specified key.

**参见**

- java.net.URLConnection#getRequestProperty(java.lang.String)
- #setDefaultRequestProperty(java.lang.String, java.lang.String)

> **⚠ Deprecated** — The instance specific getRequestProperty method should be used after an appropriate instance of URLConnection is obtained.
