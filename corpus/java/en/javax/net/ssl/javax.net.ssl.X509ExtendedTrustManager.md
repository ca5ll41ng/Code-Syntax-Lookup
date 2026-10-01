---
id: "java-en-function-javax-net-ssl-x509extendedtrustmanager"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.X509ExtendedTrustManager"
title: "X509ExtendedTrustManager"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/X509ExtendedTrustManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509ExtendedTrustManager

Extensions to the `X509TrustManager` interface to support
 SSL/TLS/DTLS connection sensitive trust management.
 

 To prevent man-in-the-middle attacks, hostname checks can be done
 to verify that the hostname in an end-entity certificate matches the
 targeted hostname.  TLS/DTLS does not require such checks, but some
 protocols over TLS/DTLS (such as HTTPS) do.  In earlier versions of the
 JDK, the certificate chain checks were done at the SSL/TLS/DTLS layer,
 and the hostname verification checks were done at the layer over TLS/DTLS.
 This class allows for the checking to be done during a single call to
 this class.
 

 RFC 2830 defines the server identification specification for the "LDAPS"
 algorithm. RFC 2818 defines both the server identification and the
 client identification specification for the "HTTPS" algorithm.

**参见**

- X509TrustManager
- HostnameVerifier

> *Since 1.7*
