---
id: "java-en-function-sslengine-isinbounddone"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.isInboundDone"
signature: "public abstract boolean isInboundDone()"
title: "SSLEngine.isInboundDone"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.isInboundDone

```java
public abstract boolean isInboundDone()
```

Returns whether `unwrap` will
 accept any more inbound data messages.

**返回**

- true if the `SSLEngine` will not consume any more network data (and by implication, will not produce any more application data.)

**参见**

- #closeInbound()
