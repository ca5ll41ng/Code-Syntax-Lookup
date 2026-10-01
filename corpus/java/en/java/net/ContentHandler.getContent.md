---
id: "java-en-function-contenthandler-getcontent"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.getContent"
signature: "public abstract Object getContent(URLConnection urlc) throws IOException"
title: "ContentHandler.getContent"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.getContent

```java
public abstract Object getContent(URLConnection urlc) throws IOException
```

Given a URL connect stream positioned at the beginning of the
 representation of an object, this method reads that stream and
 creates an object from it.

**参数**

- **urlc** — a URL connection.

**返回**

- the object read by the `ContentHandler`.

**异常**

- **IOException** — if an I/O error occurs while reading the object.
