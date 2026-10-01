---
id: "java-en-function-url-seturlstreamhandlerfactory"
language: "java"
lang: "en"
category: "function"
name: "URL.setURLStreamHandlerFactory"
signature: "public static void setURLStreamHandlerFactory(URLStreamHandlerFactory fac)"
title: "URL.setURLStreamHandlerFactory"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.setURLStreamHandlerFactory

```java
public static void setURLStreamHandlerFactory(URLStreamHandlerFactory fac)
```

Sets an application's `URLStreamHandlerFactory`.
 This method can be called at most once in a given Java Virtual
 Machine.

 The `URLStreamHandlerFactory` instance is used to
construct a stream protocol handler from a protocol name.

**参数**

- **fac** — the desired factory.

**异常**

- **Error** — if the application has already set a factory.

**参见**

- java.net.URL#URL(java.lang.String, java.lang.String, int, java.lang.String)
- java.net.URLStreamHandlerFactory
