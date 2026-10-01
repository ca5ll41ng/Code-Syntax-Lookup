---
id: "java-en-function-sslsocket-gethandshakesession"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.getHandshakeSession"
signature: "public SSLSession getHandshakeSession()"
title: "SSLSocket.getHandshakeSession"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.getHandshakeSession

```java
public SSLSession getHandshakeSession()
```

Returns the `SSLSession` being constructed during a SSL/TLS
 handshake.
 

 TLS protocols may negotiate parameters that are needed when using
 an instance of this class, but before the `SSLSession` has
 been completely initialized and made available via `getSession`.
 For example, the list of valid signature algorithms may restrict
 the type of certificates that can be used during TrustManager
 decisions, or the maximum TLS fragment packet sizes can be
 resized to better support the network environment.
 

 This method provides early access to the `SSLSession` being
 constructed.  Depending on how far the handshake has progressed,
 some data may not yet be available for use.  For example, if a
 remote server will be sending a Certificate chain, but that chain
 has yet not been processed, the `getPeerCertificates`
 method of `SSLSession` will throw a
 SSLPeerUnverifiedException.  Once that chain has been processed,
 `getPeerCertificates` will return the proper value.
 

 Unlike `getSession`, this method does not initiate the
 initial handshake and does not block until handshaking is
 complete.

**返回**

- null if this instance is not currently handshaking, or if the current handshake has not progressed far enough to create a basic SSLSession.  Otherwise, this method returns the `SSLSession` currently being negotiated.

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation.

**参见**

- SSLEngine
- SSLSession
- ExtendedSSLSession
- X509ExtendedKeyManager
- X509ExtendedTrustManager

> *Since 1.7*
