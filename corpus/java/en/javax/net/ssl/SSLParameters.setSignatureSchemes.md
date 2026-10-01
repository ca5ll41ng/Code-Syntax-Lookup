---
id: "java-en-function-sslparameters-setsignatureschemes"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setSignatureSchemes"
signature: "public void setSignatureSchemes(String[] signatureSchemes)"
title: "SSLParameters.setSignatureSchemes"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setSignatureSchemes

```java
public void setSignatureSchemes(String[] signatureSchemes)
```

Sets the prioritized array of signature scheme names that
 can be used over the SSL/TLS/DTLS protocols.
 

 Note that the standard list of signature scheme names are defined in
 the 
 Signature Schemes section of the Java Security Standard Algorithm
 Names Specification.  Providers may support signature schemes not
 defined in this list or may not use the recommended name for a certain
 signature scheme.
 

 The set of signature schemes that will be used over the SSL/TLS/DTLS
 connections is determined by the input parameter `signatureSchemes`
 array and the underlying provider-specific default signature schemes.
 See `getSignatureSchemes` for specific details on how the
 parameters are used in SSL/TLS/DTLS connections.

 Note that a provider may not have been updated to support this method
 and in that case may ignore the schemes that are set.

 The SunJSSE provider supports this method.

**参数**

- **signatureSchemes** — an ordered array of signature scheme names with the first entry being the most preferred, or `null`.  This method will make a copy of this array.  Providers should ignore unknown signature scheme names while establishing the SSL/TLS/DTLS connections.

**异常**

- **IllegalArgumentException** — if any element in the `signatureSchemes` array is `null` or `isBlank() blank`.

**参见**

- #getSignatureSchemes

> *Since 19*
