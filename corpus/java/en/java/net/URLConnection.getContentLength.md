---
id: "java-en-function-urlconnection-getcontentlength"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getContentLength"
signature: "public int getContentLength()"
title: "URLConnection.getContentLength"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getContentLength

```java
public int getContentLength()
```

Returns the value of the `content-length` header field.
 

 **Note**: `getContentLengthLong`
 should be preferred over this method, since it returns a `long`
 instead and is therefore more portable.

**返回**

- the content length of the resource that this connection's URL references, `-1` if the content length is not known, or if the content length is greater than Integer.MAX_VALUE.
