---
id: "java-en-function-urlconnection-getcontentlengthlong"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getContentLengthLong"
signature: "public long getContentLengthLong()"
title: "URLConnection.getContentLengthLong"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getContentLengthLong

```java
public long getContentLengthLong()
```

Returns the value of the `content-length` header field as a
 long.

**返回**

- the content length of the resource that this connection's URL references, or `-1` if the content length is not known.

> *Since 1.7*
