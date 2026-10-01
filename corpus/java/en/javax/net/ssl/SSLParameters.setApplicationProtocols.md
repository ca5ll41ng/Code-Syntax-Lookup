---
id: "java-en-function-sslparameters-setapplicationprotocols"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setApplicationProtocols"
signature: "public void setApplicationProtocols(String[] protocols)"
title: "SSLParameters.setApplicationProtocols"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setApplicationProtocols

```java
public void setApplicationProtocols(String[] protocols)
```

Sets the prioritized array of application-layer protocol names that
 can be negotiated over the SSL/TLS/DTLS protocols.
 

 If application-layer protocols are supported by the underlying
 SSL/TLS implementation, this method configures which values can
 be negotiated by protocols such as  RFC 7301 , the
 Application Layer Protocol Negotiation (ALPN).
 

 If this end of the connection is expected to offer application protocol
 values, all protocols configured by this method will be sent to the
 peer.
 

 If this end of the connection is expected to select the application
 protocol value, the `protocols` configured by this method are
 compared with those sent by the peer.  The first matched value becomes
 the negotiated value.  If none of the `protocols` were actually
 requested by the peer, the underlying protocol will determine what
 action to take.  (For example, ALPN will send a
 `"no_application_protocol"` alert and terminate the connection.)
 

 The `String` values must be presented using the network
 byte representation expected by the peer.  For example, if an ALPN
 `String` should be exchanged using `UTF-8`, the
 `String` should be converted to its `byte[]` representation
 and stored as a byte-oriented `String` before calling this method.
 For example:

 
```

     // Encode 3 Meetei Mayek letters (HUK, UN, I) using Unicode Escapes
     //     0xabcd->0xabcf, 2 Unicode bytes/letter.
     String HUK_UN_I =  "\u005cuabcd\u005cuabce\u005cuabcf";

     // Convert into UTF-8 encoded bytes (3 bytes/letter)
     byte[] bytes = HUK_UN_I.getBytes(StandardCharsets.UTF_8);

     // Preserve octet byte order by using ISO_8859_1 encoding
     String encodedHukUnI =
         new String(bytes, StandardCharsets.ISO_8859_1);

     // Also, encode a two byte RFC 8701 GREASE ALPN value
     //     e.g. 0x0A, 0x1A, 0x2A...0xFA
     String rfc8701Grease8A = "\u005cu008A\u005cu008A";

     // Set the ALPN vlues on the sslSocket.
     SSLParameters p = sslSocket.getSSLParameters();
     p.setApplicationProtocols(new String[] {
             "h2", "http/1.1", encodedHukUnI, rfc8701Grease8A});
     sslSocket.setSSLParameters(p);
 
```

 This method will make a copy of the `protocols` array.

      RFC 7301: Transport Layer Security (TLS) Application-Layer Protocol Negotiation Extension

**参数**

- **protocols** — an ordered array of application protocols, with `protocols[0]` being the most preferred. If the array is empty (zero-length), protocol indications will not be used.

**异常**

- **IllegalArgumentException** — if protocols is null, or if any element in a non-empty array is null or an empty (zero-length) string

**参见**

- #getApplicationProtocols

> *Since 9*
