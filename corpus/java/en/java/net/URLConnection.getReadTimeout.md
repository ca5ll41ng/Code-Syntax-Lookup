---
id: "java-en-function-urlconnection-getreadtimeout"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getReadTimeout"
signature: "public int getReadTimeout()"
title: "URLConnection.getReadTimeout"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getReadTimeout

```java
public int getReadTimeout()
```

Returns setting for read timeout. 0 return implies that the
 option is disabled (i.e., timeout of infinity).

**返回**

- an `int` that indicates the read timeout value in milliseconds

**参见**

- #setReadTimeout(int)
- InputStream#read()

> *Since 1.5*
