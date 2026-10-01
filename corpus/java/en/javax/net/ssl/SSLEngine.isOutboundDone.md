---
id: "java-en-function-sslengine-isoutbounddone"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.isOutboundDone"
signature: "public abstract boolean isOutboundDone()"
title: "SSLEngine.isOutboundDone"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.isOutboundDone

```java
public abstract boolean isOutboundDone()
```

Returns whether `wrap` will
 produce any more outbound data messages.
 

 Note that during the closure phase, a `SSLEngine` may
 generate handshake closure data that must be sent to the peer.
 `wrap()` must be called to generate this data.  When
 this method returns true, no more outbound data will be created.

**返回**

- true if the `SSLEngine` will not produce any more network data

**参见**

- #closeOutbound()
- #closeInbound()
