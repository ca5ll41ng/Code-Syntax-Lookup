---
id: "java-en-function-javax-net-ssl-sslengineresult"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLEngineResult"
title: "SSLEngineResult"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngineResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngineResult

An encapsulation of the result state produced by
 `SSLEngine` I/O calls.

 

 A `SSLEngine` provides a means for establishing
 secure communication sessions between two peers.  `SSLEngine`
 operations typically consume bytes from an input buffer and produce
 bytes in an output buffer.  This class provides operational result
 values describing the state of the `SSLEngine`, including
 indications of what operations are needed to finish an
 ongoing handshake.  Lastly, it reports the number of bytes consumed
 and produced as a result of this operation.

**参见**

- SSLEngine
- SSLEngine#wrap(ByteBuffer, ByteBuffer)
- SSLEngine#unwrap(ByteBuffer, ByteBuffer)

> *Since 1.5*
