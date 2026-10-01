---
id: "java-en-function-x509extendedtrustmanager-checkservertrusted"
language: "java"
lang: "en"
category: "function"
name: "X509ExtendedTrustManager.checkServerTrusted"
signature: "public abstract void checkServerTrusted(X509Certificate[] chain, String authType, Socket socket) throws CertificateException"
title: "X509ExtendedTrustManager.checkServerTrusted"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/X509ExtendedTrustManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509ExtendedTrustManager.checkServerTrusted

```java
public abstract void checkServerTrusted(X509Certificate[] chain, String authType, Socket socket) throws CertificateException
```

Given the partial or complete certificate chain provided by the
 peer, build and validate the certificate path based on the
 authentication type and ssl parameters.
 

 The authentication type is the key exchange algorithm portion
 of the cipher suites represented as a String, such as "RSA",
 "DHE_DSS". Note: for some exportable cipher suites, the key
 exchange algorithm is determined at run time during the
 handshake. For instance, for TLS_RSA_EXPORT_WITH_RC4_40_MD5,
 the authType should be RSA_EXPORT when an ephemeral RSA key is
 used for the key exchange, and RSA when the key from the server
 certificate is used. Checking is case-sensitive.
 

 If the `socket` parameter is an instance of
 `javax.net.ssl.SSLSocket`, and the endpoint identification
 algorithm of the `SSLParameters` is non-empty, to prevent
 man-in-the-middle attacks, the address that the `socket`
 connected to should be checked against the peer's identity presented
 in the end-entity X509 certificate, as specified in the endpoint
 identification algorithm.
 

 If the `socket` parameter is an instance of
 `javax.net.ssl.SSLSocket`, and the algorithm constraints of the
  `SSLParameters` is non-null, for every certificate in the
 certification path, fields such as subject public key, the signature
 algorithm, key usage, extended key usage, etc. need to conform to the
 algorithm constraints in place on this socket.

**参数**

- **chain** — the peer certificate chain
- **authType** — the key exchange algorithm used
- **socket** — the socket used for this connection. This parameter can be null, which indicates that implementations need not check the ssl parameters

**异常**

- **IllegalArgumentException** — if null or zero-length array is passed in for the `chain` parameter or if null or zero-length string is passed in for the `authType` parameter
- **CertificateException** — if the certificate chain is not trusted by this TrustManager

**参见**

- SSLParameters#getEndpointIdentificationAlgorithm
- SSLParameters#setEndpointIdentificationAlgorithm(String)
- SSLParameters#getAlgorithmConstraints
- SSLParameters#setAlgorithmConstraints(AlgorithmConstraints)
