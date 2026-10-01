---
id: "java-en-function-urlconnection-setrequestproperty"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.setRequestProperty"
signature: "public void setRequestProperty(String key, String value)"
title: "URLConnection.setRequestProperty"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.setRequestProperty

```java
public void setRequestProperty(String key, String value)
```

Sets the general request property. If a property with the key already
 exists, overwrite its value with the new value.

 

 NOTE: HTTP requires all request properties which can
 legally have multiple instances with the same key
 to use a comma-separated list syntax which enables multiple
 properties to be appended into a single property.

**参数**

- **key** — the keyword by which the request is known (e.g., "`Accept`").
- **value** — the value associated with it.

**异常**

- **IllegalStateException** — if already connected
- **NullPointerException** — if key is `null`

**参见**

- #getRequestProperty(java.lang.String)
