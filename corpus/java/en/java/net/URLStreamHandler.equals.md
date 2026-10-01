---
id: "java-en-function-urlstreamhandler-equals"
language: "java"
lang: "en"
category: "function"
name: "URLStreamHandler.equals"
signature: "protected boolean equals(URL u1, URL u2)"
title: "URLStreamHandler.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLStreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandler.equals

```java
protected boolean equals(URL u1, URL u2)
```

Provides the default equals calculation. May be overridden by handlers
 for other protocols that have different requirements for equals().
 This method requires that none of its arguments is null. This is
 guaranteed by the fact that it is only called by java.net.URL class.

**参数**

- **u1** — a URL object
- **u2** — a URL object

**返回**

- `true` if the two urls are considered equal, i.e. they refer to the same fragment in the same file.

> *Since 1.3*
