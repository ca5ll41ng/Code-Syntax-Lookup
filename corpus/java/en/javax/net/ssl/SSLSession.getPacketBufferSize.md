---
id: "java-en-function-sslsession-getpacketbuffersize"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getPacketBufferSize"
signature: "int getPacketBufferSize()"
title: "SSLSession.getPacketBufferSize"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getPacketBufferSize

```java
int getPacketBufferSize()
```

Gets the current size of the largest SSL/TLS/DTLS packet that is
 expected when using this session.
 

 An `SSLEngine` using this session may generate SSL/TLS/DTLS
 packets of any size up to and including the value returned by this
 method. All `SSLEngine` network buffers should be sized
 at least this large to avoid insufficient space problems when
 performing `wrap` and `unwrap` calls.

**返回**

- the current maximum expected network packet size

**参见**

- SSLEngine#wrap(ByteBuffer, ByteBuffer)
- SSLEngine#unwrap(ByteBuffer, ByteBuffer)

> *Since 1.5*
