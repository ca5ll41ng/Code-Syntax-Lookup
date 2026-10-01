---
id: "java-en-function-javax-net-ssl-sslparameters"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLParameters"
title: "SSLParameters"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters

Encapsulates parameters for an SSL/TLS/DTLS connection. The parameters
 are the list of ciphersuites to be accepted in an SSL/TLS/DTLS handshake,
 the list of protocols to be allowed, the endpoint identification
 algorithm during SSL/TLS/DTLS handshaking, the Server Name Indication (SNI),
 the maximum network packet size, the algorithm constraints, the signature
 schemes, the key exchange named groups and whether SSL/TLS/DTLS servers
 should request or require client authentication, etc.
 

 `SSLParameter` objects can be created via the constructors in this
 class, and can be described as pre-populated objects. `SSLParameter`
 objects can also be obtained using the `getSSLParameters()` methods in
 `getSSLParameters SSLSocket` and
 `getSSLParameters SSLServerSocket` and
 `getSSLParameters SSLEngine` or the
 `getDefaultSSLParameters getDefaultSSLParameters` and
 `getSupportedSSLParameters getSupportedSSLParameters`
 methods in `SSLContext`, and can be described as connection populated
 objects.
 

 SSLParameters can be applied to a connection via the methods
 `setSSLParameters SSLSocket.setSSLParameters` and
 `setSSLParameters SSLServerSocket.setSSLParameters`
 and `setSSLParameters SSLEngine.setSSLParameters`.
 

 For example:

 
```

     SSLParameters p = sslSocket.getSSLParameters();
     p.setProtocols(new String[] { "TLSv1.2" });
     p.setCipherSuites(
         new String[] { "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256", ... });
     p.setApplicationProtocols(new String[] {"h2", "http/1.1"});
     sslSocket.setSSLParameters(p);
 
```

**参见**

- SSLSocket
- SSLEngine
- SSLContext

> *Since 1.6*
