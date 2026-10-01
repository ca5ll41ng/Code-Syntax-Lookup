---
id: "java-en-function-extendedsslsession-getstatusresponses"
language: "java"
lang: "en"
category: "function"
name: "ExtendedSSLSession.getStatusResponses"
signature: "public List<byte[]> getStatusResponses()"
title: "ExtendedSSLSession.getStatusResponses"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/ExtendedSSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedSSLSession.getStatusResponses

```java
public List<byte[]> getStatusResponses()
```

Returns a `List` containing DER-encoded OCSP responses
 (using the ASN.1 type OCSPResponse defined in RFC 6960) for
 the client to verify status of the server's certificate during
 handshaking.

 

 This method only applies to certificate-based server
 authentication.  An `X509ExtendedTrustManager` will use the
 returned value for server certificate validation.

         Classes derived from ExtendedSSLSession must implement
         this method.

**返回**

- a non-null unmodifiable list of byte arrays, each entry containing a DER-encoded OCSP response (using the ASN.1 type OCSPResponse defined in RFC 6960).  The order of the responses must match the order of the certificates presented by the server in its Certificate message (See `getLocalCertificates` for server mode, and `getPeerCertificates` for client mode). It is possible that fewer response entries may be returned than the number of presented certificates.  If an entry in the list is a zero-length byte array, it should be treated by the caller as if the OCSP entry for the corresponding certificate is missing.  The returned list may be empty if no OCSP responses were presented during handshaking or if OCSP stapling is not supported by either endpoint for this handshake.

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation

**参见**

- X509ExtendedTrustManager

> *Since 9*
