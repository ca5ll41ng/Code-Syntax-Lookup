---
id: "java-en-function-urlconnection-setcontenthandlerfactory"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.setContentHandlerFactory"
signature: "public static synchronized void setContentHandlerFactory(ContentHandlerFactory fac)"
title: "URLConnection.setContentHandlerFactory"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.setContentHandlerFactory

```java
public static synchronized void setContentHandlerFactory(ContentHandlerFactory fac)
```

Sets the `ContentHandlerFactory` of an
 application. It can be called at most once by an application.
 

 The `ContentHandlerFactory` instance is used to
 construct a content handler from a content type.

**参数**

- **fac** — the desired factory.

**异常**

- **Error** — if the factory has already been defined.

**参见**

- java.net.ContentHandlerFactory
- java.net.URLConnection#getContent()
