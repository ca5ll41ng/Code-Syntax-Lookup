---
id: "java-en-function-httpsurlconnection-getservercertificates"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.getServerCertificates"
signature: "public abstract java.security.cert.Certificate [] getServerCertificates() throws SSLPeerUnverifiedException"
title: "HttpsURLConnection.getServerCertificates"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.getServerCertificates

```java
public abstract java.security.cert.Certificate [] getServerCertificates() throws SSLPeerUnverifiedException
```

Returns the server's certificate chain which was established
 as part of defining the session.
 

 Note: This method can be used only when using certificate-based
 cipher suites; using it with non-certificate-based cipher suites,
 such as Kerberos, will throw an SSLPeerUnverifiedException.
 

 Note: The returned value may not be a valid certificate chain
 and should not be relied on for trust decisions.

**返回**

- an ordered array of server certificates, with the peer's own certificate first followed by any certificate authorities.

**异常**

- **SSLPeerUnverifiedException** — if the peer is not verified.
- **IllegalStateException** — if this method is called before the connection has been established.

**参见**

- #getPeerPrincipal()
