---
id: "java-en-function-urlstreamhandler-samefile"
language: "java"
lang: "en"
category: "function"
name: "URLStreamHandler.sameFile"
signature: "protected boolean sameFile(URL u1, URL u2)"
title: "URLStreamHandler.sameFile"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLStreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandler.sameFile

```java
protected boolean sameFile(URL u1, URL u2)
```

Compare two urls to see whether they refer to the same file,
 i.e., having the same protocol, host, port, and path.
 This method requires that none of its arguments is null. This is
 guaranteed by the fact that it is only called indirectly
 by java.net.URL class.

**参数**

- **u1** — a URL object
- **u2** — a URL object

**返回**

- true if u1 and u2 refer to the same file

> *Since 1.3*
