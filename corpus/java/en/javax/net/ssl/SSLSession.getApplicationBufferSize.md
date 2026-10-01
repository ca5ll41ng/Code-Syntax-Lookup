---
id: "java-en-function-sslsession-getapplicationbuffersize"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getApplicationBufferSize"
signature: "int getApplicationBufferSize()"
title: "SSLSession.getApplicationBufferSize"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getApplicationBufferSize

```java
int getApplicationBufferSize()
```

Gets the current size of the largest application data that is
 expected when using this session.
 

 `SSLEngine` application data buffers must be large
 enough to hold the application data from any inbound network
 application data packet received.  Typically, outbound
 application data buffers can be of any size.

**返回**

- the current maximum expected application packet size

**参见**

- SSLEngine#wrap(ByteBuffer, ByteBuffer)
- SSLEngine#unwrap(ByteBuffer, ByteBuffer)

> *Since 1.5*
