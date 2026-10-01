---
id: "java-en-function-extendedsslsession-getpeersupportedsignaturealgorithms"
language: "java"
lang: "en"
category: "function"
name: "ExtendedSSLSession.getPeerSupportedSignatureAlgorithms"
signature: "public abstract String[] getPeerSupportedSignatureAlgorithms()"
title: "ExtendedSSLSession.getPeerSupportedSignatureAlgorithms"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/ExtendedSSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedSSLSession.getPeerSupportedSignatureAlgorithms

```java
public abstract String[] getPeerSupportedSignatureAlgorithms()
```

Obtains an array of supported signature algorithms that the peer is
 able to use.
 

 Note: this method is used to indicate to the local side which signature
 algorithms may be used for digital signatures in TLS/DTLS 1.2. It is
 not meaningful for TLS/DTLS versions prior to 1.2.
 

 The signature algorithm name must be a standard Java Security
 name (such as "SHA1withRSA", "SHA256withECDSA", and so on).
 See the 
 Java Security Standard Algorithm Names document
 for information about standard algorithm names.

**返回**

- An array of supported signature algorithms, in descending order of preference.  The return value is an empty array if the peer has not sent the supported signature algorithms.

**参见**

- X509KeyManager
- X509ExtendedKeyManager
