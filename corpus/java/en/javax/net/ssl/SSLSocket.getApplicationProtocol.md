---
id: "java-en-function-sslsocket-getapplicationprotocol"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.getApplicationProtocol"
signature: "public String getApplicationProtocol()"
title: "SSLSocket.getApplicationProtocol"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.getApplicationProtocol

```java
public String getApplicationProtocol()
```

Returns the most recent application protocol value negotiated for this
 connection.
 

 If supported by the underlying SSL/TLS/DTLS implementation,
 application name negotiation mechanisms such as  RFC 7301 , the
 Application-Layer Protocol Negotiation (ALPN), can negotiate
 application-level values between peers.

 The implementation in this class throws
 `UnsupportedOperationException` and performs no other action.

      RFC 7301: Transport Layer Security (TLS) Application-Layer Protocol Negotiation Extension

**返回**

- null if it has not yet been determined if application protocols might be used for this connection, an empty `String` if application protocols values will not be used, or a non-empty application protocol `String` if a value was successfully negotiated.

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation.

> *Since 9*
