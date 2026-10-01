---
id: "java-en-function-sslparameters-getsignatureschemes"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.getSignatureSchemes"
signature: "public String[] getSignatureSchemes()"
title: "SSLParameters.getSignatureSchemes"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.getSignatureSchemes

```java
public String[] getSignatureSchemes()
```

Returns a prioritized array of signature scheme names that can be used
 over the SSL/TLS/DTLS protocols.
 

 Note that the standard list of signature scheme names are defined in
 the 
 Signature Schemes section of the Java Security Standard Algorithm
 Names Specification.  Providers may support signature schemes not defined
 in this list or may not use the recommended name for a certain
 signature scheme.
 

 The set of signature schemes that will be used over the SSL/TLS/DTLS
 connections is determined by the returned array of this method and the
 underlying provider-specific default signature schemes.
 

 If the returned array is `null`, then the underlying
 provider-specific default signature schemes will be used over the
 SSL/TLS/DTLS connections.
 

 If the returned array is empty (zero-length), then the signature scheme
 negotiation mechanism is turned off for SSL/TLS/DTLS protocols, and
 the connections may not be able to be established if the negotiation
 mechanism is required by a certain SSL/TLS/DTLS protocol.  This
 parameter will override the underlying provider-specific default
 signature schemes.
 

 If the returned array is not `null` or empty (zero-length),
 then the signature schemes in the returned array will be used over
 the SSL/TLS/DTLS connections.  This parameter will override the
 underlying provider-specific default signature schemes.
 

 This method returns the most recent value passed to
 `setSignatureSchemes` if that method has been called and
 otherwise returns the default signature schemes for connection
 populated objects, or `null` for pre-populated objects.

 Note that a provider may not have been updated to support this method
 and in that case may return `null` instead of the default
 signature schemes for connection populated objects.

 The SunJSSE provider supports this method.

 Note that applications may use the
 {@systemProperty jdk.tls.client.SignatureSchemes} and/or
 {@systemProperty jdk.tls.server.SignatureSchemes} system properties
 with the SunJSSE provider to override the provider-specific default
 signature schemes.

**返回**

- an array of signature scheme `Strings` or `null` if none have been set.  For non-null returns, this method will return a new array each time it is invoked.  The array is ordered based on signature scheme preference, with the first entry being the most preferred.  Providers should ignore unknown signature scheme names while establishing the SSL/TLS/DTLS connections.

**参见**

- #setSignatureSchemes

> *Since 19*
