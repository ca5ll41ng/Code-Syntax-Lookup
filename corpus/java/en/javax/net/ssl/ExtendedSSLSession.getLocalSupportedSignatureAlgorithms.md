---
id: "java-en-function-extendedsslsession-getlocalsupportedsignaturealgorithms"
language: "java"
lang: "en"
category: "function"
name: "ExtendedSSLSession.getLocalSupportedSignatureAlgorithms"
signature: "public abstract String[] getLocalSupportedSignatureAlgorithms()"
title: "ExtendedSSLSession.getLocalSupportedSignatureAlgorithms"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/ExtendedSSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedSSLSession.getLocalSupportedSignatureAlgorithms

```java
public abstract String[] getLocalSupportedSignatureAlgorithms()
```

Obtains an array of supported signature algorithms that the local side
 is willing to use.
 

 Note: this method is used to indicate to the peer which signature
 algorithms may be used for digital signatures in TLS/DTLS 1.2. It is
 not meaningful for TLS/DTLS versions prior to 1.2.
 

 The signature algorithm name must be a standard Java Security
 name (such as "SHA1withRSA", "SHA256withECDSA", and so on).
 See the 
 Java Security Standard Algorithm Names document
 for information about standard algorithm names.
 

 Note: the local supported signature algorithms should conform to
 the algorithm constraints specified by
 `getAlgorithmConstraints getAlgorithmConstraints`
 method in `SSLParameters`.

**返回**

- An array of supported signature algorithms, in descending order of preference.  The return value is an empty array if no signature algorithm is supported.

**参见**

- SSLParameters#getAlgorithmConstraints
