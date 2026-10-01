---
id: "java-en-function-sslengine-gethandshakeapplicationprotocolselector"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getHandshakeApplicationProtocolSelector"
signature: "public BiFunction<SSLEngine, List<String>, String> getHandshakeApplicationProtocolSelector()"
title: "SSLEngine.getHandshakeApplicationProtocolSelector"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getHandshakeApplicationProtocolSelector

```java
public BiFunction<SSLEngine, List<String>, String> getHandshakeApplicationProtocolSelector()
```

Retrieves the callback function that selects an application protocol
 value during a SSL/TLS/DTLS handshake.
 See `setHandshakeApplicationProtocolSelector
 setHandshakeApplicationProtocolSelector`
 for the function's type parameters.

 The implementation in this class throws
 `UnsupportedOperationException` and performs no other action.

**返回**

- the callback function, or null if none has been set.

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation.

> *Since 9*
