---
id: "java-en-function-urlconnection-getdate"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getDate"
signature: "public long getDate()"
title: "URLConnection.getDate"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getDate

```java
public long getDate()
```

Returns the value of the `date` header field.

**返回**

- the sending date of the resource that the URL references, or `0` if not known. The value returned is the number of milliseconds since January 1, 1970 GMT.

**参见**

- java.net.URLConnection#getHeaderField(java.lang.String)
