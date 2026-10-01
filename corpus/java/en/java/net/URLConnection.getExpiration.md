---
id: "java-en-function-urlconnection-getexpiration"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getExpiration"
signature: "public long getExpiration()"
title: "URLConnection.getExpiration"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getExpiration

```java
public long getExpiration()
```

Returns the value of the `expires` header field.

**返回**

- the expiration date of the resource that this URL references, or 0 if not known. The value is the number of milliseconds since January 1, 1970 GMT.

**参见**

- java.net.URLConnection#getHeaderField(java.lang.String)
