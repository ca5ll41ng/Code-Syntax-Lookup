---
id: "java-en-function-sslcontext-getprotocol"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.getProtocol"
signature: "public final String getProtocol()"
title: "SSLContext.getProtocol"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.getProtocol

```java
public final String getProtocol()
```

Returns the protocol name of this `SSLContext` object.

 

This is the same name that was specified in one of the
 `getInstance` calls that created this
 `SSLContext` object.

**返回**

- the protocol name of this `SSLContext` object.
