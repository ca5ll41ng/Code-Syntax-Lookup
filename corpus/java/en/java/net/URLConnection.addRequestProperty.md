---
id: "java-en-function-urlconnection-addrequestproperty"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.addRequestProperty"
signature: "public void addRequestProperty(String key, String value)"
title: "URLConnection.addRequestProperty"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.addRequestProperty

```java
public void addRequestProperty(String key, String value)
```

Adds a general request property specified by a
 key-value pair.  This method will not overwrite
 existing values associated with the same key.

 This method could be a no-op if appending a value
 to the map is not supported by the protocol being
 used in a given subclass.

**参数**

- **key** — the keyword by which the request is known (e.g., "`Accept`").
- **value** — the value associated with it.

**异常**

- **IllegalStateException** — if already connected
- **NullPointerException** — if key is null

**参见**

- #getRequestProperties()

> *Since 1.4*
