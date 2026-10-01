---
id: "java-en-function-sslengineresult-sslengineresult"
language: "java"
lang: "en"
category: "function"
name: "SSLEngineResult.SSLEngineResult"
signature: "public SSLEngineResult(Status status, HandshakeStatus handshakeStatus, int bytesConsumed, int bytesProduced)"
title: "SSLEngineResult.SSLEngineResult"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngineResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngineResult.SSLEngineResult

```java
public SSLEngineResult(Status status, HandshakeStatus handshakeStatus, int bytesConsumed, int bytesProduced)
```

Initializes a new instance of this class.

**参数**

- **status** — the return value of the operation.
- **handshakeStatus** — the current handshaking status.
- **bytesConsumed** — the number of bytes consumed from the source ByteBuffer
- **bytesProduced** — the number of bytes placed into the destination ByteBuffer

**异常**

- **IllegalArgumentException** — if the `status` or `handshakeStatus` arguments are null, or if `bytesConsumed` or `bytesProduced` is negative.
