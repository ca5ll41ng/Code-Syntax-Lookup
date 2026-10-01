---
id: "java-en-function-url-getdefaultport"
language: "java"
lang: "en"
category: "function"
name: "URL.getDefaultPort"
signature: "public int getDefaultPort()"
title: "URL.getDefaultPort"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.getDefaultPort

```java
public int getDefaultPort()
```

Gets the default port number of the protocol associated
 with this `URL`. If the URL scheme or the URLStreamHandler
 for the URL do not define a default port number,
 then -1 is returned.

**返回**

- the port number

> *Since 1.4*
