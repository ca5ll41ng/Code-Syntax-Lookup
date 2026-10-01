---
id: "java-en-function-urlstreamhandlerfactory-createurlstreamhandler"
language: "java"
lang: "en"
category: "function"
name: "URLStreamHandlerFactory.createURLStreamHandler"
signature: "URLStreamHandler createURLStreamHandler(String protocol)"
title: "URLStreamHandlerFactory.createURLStreamHandler"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLStreamHandlerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandlerFactory.createURLStreamHandler

```java
URLStreamHandler createURLStreamHandler(String protocol)
```

Creates a new `URLStreamHandler` instance with the specified
 protocol.

**参数**

- **protocol** — the protocol ("`ftp`", "`http`", "`nntp`", etc.).

**返回**

- a `URLStreamHandler` for the specific protocol, or `null` if this factory cannot create a handler for the specific protocol

**参见**

- java.net.URLStreamHandler
