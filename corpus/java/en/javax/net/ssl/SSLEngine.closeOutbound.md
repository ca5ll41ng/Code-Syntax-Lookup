---
id: "java-en-function-sslengine-closeoutbound"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.closeOutbound"
signature: "public abstract void closeOutbound()"
title: "SSLEngine.closeOutbound"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.closeOutbound

```java
public abstract void closeOutbound()
```

Signals that no more outbound application data will be sent
 on this `SSLEngine`.
 

 This method is idempotent:  if the outbound side has already
 been closed, this method does not do anything.
 

 `wrap` should be
 called to flush any remaining handshake data.

**参见**

- #isOutboundDone()
