---
id: "java-en-function-sslengine-gethandshakeapplicationprotocol"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getHandshakeApplicationProtocol"
signature: "public String getHandshakeApplicationProtocol()"
title: "SSLEngine.getHandshakeApplicationProtocol"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getHandshakeApplicationProtocol

```java
public String getHandshakeApplicationProtocol()
```

Returns the application protocol value negotiated on a SSL/TLS
 handshake currently in progress.
 

 Like `getHandshakeSession`,
 a connection may be in the middle of a handshake. The
 application protocol may or may not yet be available.

 The implementation in this class throws
 `UnsupportedOperationException` and performs no other action.

**返回**

- null if it has not yet been determined if application protocols might be used for this handshake, an empty `String` if application protocols values will not be used, or a non-empty application protocol `String` if a value was successfully negotiated.

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation.

> *Since 9*
