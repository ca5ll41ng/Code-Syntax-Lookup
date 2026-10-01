---
id: "java-en-function-sslengine-closeinbound"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.closeInbound"
signature: "public abstract void closeInbound() throws SSLException"
title: "SSLEngine.closeInbound"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.closeInbound

```java
public abstract void closeInbound() throws SSLException
```

Signals that no more inbound network data will be sent
 to this `SSLEngine`.
 

 If the application initiated the closing process by calling
 `closeOutbound`, under some circumstances it is not
 required that the initiator wait for the peer's corresponding
 close message.  (See section 7.2.1 of the TLS specification (RFC 2246) for more
 information on waiting for closure alerts.)  In such cases, this
 method need not be called.
 

 But if the application did not initiate the closure process, or
 if the circumstances above do not apply, this method should be
 called whenever the end of the SSL/TLS/DTLS data stream is reached.
 This ensures closure of the inbound side, and checks that the
 peer followed the SSL/TLS/DTLS close procedure properly, thus
 detecting possible truncation attacks.
 

 This method is idempotent:  if the inbound side has already
 been closed, this method does not do anything.
 

 `wrap` should be
 called to flush any remaining handshake data.

      RFC 2246: The TLS Protocol Version 1.0

**异常**

- **SSLException** — if this engine has not received the proper SSL/TLS/DTLS close notification message from the peer.

**参见**

- #isInboundDone()
- #isOutboundDone()
