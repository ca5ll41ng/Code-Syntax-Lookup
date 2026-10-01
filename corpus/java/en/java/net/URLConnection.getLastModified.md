---
id: "java-en-function-urlconnection-getlastmodified"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getLastModified"
signature: "public long getLastModified()"
title: "URLConnection.getLastModified"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getLastModified

```java
public long getLastModified()
```

Returns the value of the `last-modified` header field.
 The result is the number of milliseconds since January 1, 1970 GMT.

**返回**

- the date the resource referenced by this `URLConnection` was last modified, or 0 if not known.

**参见**

- java.net.URLConnection#getHeaderField(java.lang.String)
