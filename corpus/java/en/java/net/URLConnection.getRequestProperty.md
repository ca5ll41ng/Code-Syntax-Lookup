---
id: "java-en-function-urlconnection-getrequestproperty"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getRequestProperty"
signature: "public String getRequestProperty(String key)"
title: "URLConnection.getRequestProperty"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getRequestProperty

```java
public String getRequestProperty(String key)
```

Returns the value of the named general request property for this
 connection.

**参数**

- **key** — the keyword by which the request is known (e.g., "Accept").

**返回**

- the value of the named general request property for this connection. If key is null, then null is returned.

**异常**

- **IllegalStateException** — if already connected

**参见**

- #setRequestProperty(java.lang.String, java.lang.String)
