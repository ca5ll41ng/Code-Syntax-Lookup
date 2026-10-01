---
id: "java-en-function-sslsocket-sethandshakeapplicationprotocolselector"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.setHandshakeApplicationProtocolSelector"
signature: "public void setHandshakeApplicationProtocolSelector( BiFunction<SSLSocket, List<String>, String> selector)"
title: "SSLSocket.setHandshakeApplicationProtocolSelector"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.setHandshakeApplicationProtocolSelector

```java
public void setHandshakeApplicationProtocolSelector( BiFunction<SSLSocket, List<String>, String> selector)
```

Registers a callback function that selects an application protocol
 value for a SSL/TLS/DTLS handshake.
 The function overrides any values supplied using
 `setApplicationProtocols
 SSLParameters.setApplicationProtocols` and it supports the following
 type parameters:
 
 
  `SSLSocket`
  The function's first argument allows the current `SSLSocket`
      to be inspected, including the handshake session and configuration
      settings.
  `List`
  The function's second argument lists the application protocol names
      advertised by the TLS peer.
  `String`
  The function's result is an application protocol name, or null to
      indicate that none of the advertised names are acceptable.
      If the return value is an empty `String` then application
      protocol indications will not be used.
      If the return value is null (no value chosen) or is a value that
      was not advertised by the peer, the underlying protocol will
      determine what action to take. (For example, ALPN will send a
      "no_application_protocol" alert and terminate the connection.)
 
 

 For example, the following call registers a callback function that
 examines the TLS handshake parameters and selects an application protocol
 name:
 
```
`serverSocket.setHandshakeApplicationProtocolSelector(
         (serverSocket, clientProtocols) -> {
             SSLSession session = serverSocket.getHandshakeSession();
             return chooseApplicationProtocol(
                 serverSocket,
                 clientProtocols,
                 session.getProtocol(),
                 session.getCipherSuite());
         `);
 }
```

 This method should be called by TLS server applications before the TLS
 handshake begins. Also, this `SSLSocket` should be configured with
 parameters that are compatible with the application protocol selected by
 the callback function. For example, enabling a poor choice of cipher
 suites could result in no suitable application protocol.
 See `SSLParameters`.

 The implementation in this class throws
 `UnsupportedOperationException` and performs no other action.

**参数**

- **selector** — the callback function, or null to de-register.

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation.

> *Since 9*
