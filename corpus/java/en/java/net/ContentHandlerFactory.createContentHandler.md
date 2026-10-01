---
id: "java-en-function-contenthandlerfactory-createcontenthandler"
language: "java"
lang: "en"
category: "function"
name: "ContentHandlerFactory.createContentHandler"
signature: "ContentHandler createContentHandler(String mimetype)"
title: "ContentHandlerFactory.createContentHandler"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ContentHandlerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandlerFactory.createContentHandler

```java
ContentHandler createContentHandler(String mimetype)
```

Creates a new `ContentHandler` to read an object from
 a `URLStreamHandler`.

**参数**

- **mimetype** — the MIME type for which a content handler is desired.

**返回**

- a new `ContentHandler` to read an object from a `URLStreamHandler`.

**参见**

- java.net.ContentHandler
- java.net.URLStreamHandler
