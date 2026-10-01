---
id: "java-en-function-sslparameters-getnamedgroups"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.getNamedGroups"
signature: "public String[] getNamedGroups()"
title: "SSLParameters.getNamedGroups"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.getNamedGroups

```java
public String[] getNamedGroups()
```

Returns a prioritized array of key exchange named groups names that
 can be used over the SSL/TLS/DTLS protocols.
 

 Note that the standard list of key exchange named groups are defined
 in the 
 Named Groups section of the Java Security Standard Algorithm
 Names Specification.  Providers may support named groups not defined
 in this list or may not use the recommended name for a certain named
 group.
 

 The set of named groups that will be used over the SSL/TLS/DTLS
 connections is determined by the returned array of this method and the
 underlying provider-specific default named groups.
 

 If the returned array is `null`, then the underlying
 provider-specific default named groups will be used over the
 SSL/TLS/DTLS connections.
 

 If the returned array is empty (zero-length), then the named group
 negotiation mechanism is turned off for SSL/TLS/DTLS protocols, and
 the connections may not be able to be established if the negotiation
 mechanism is required by a certain SSL/TLS/DTLS protocol.  This
 parameter will override the underlying provider-specific default
 name groups.
 

 If the returned array is not `null` or empty (zero-length),
 then the named groups in the returned array will be used over
 the SSL/TLS/DTLS connections.  This parameter will override the
 underlying provider-specific default named groups.
 

 This method returns the most recent value passed to
 `setNamedGroups` if that method has been called and otherwise
 returns the default named groups for connection populated objects,
 or `null` for pre-populated objects.

 Note that a provider may not have been updated to support this method
 and in that case may return `null` instead of the default
 named groups for connection populated objects.

 The SunJSSE provider supports this method.

 Note that applications may use the
 {@systemProperty jdk.tls.namedGroups} system property with the SunJSSE
 provider to override the provider-specific default named groups.

**返回**

- an array of key exchange named group names `Strings` or `null` if none have been set.  For non-null returns, this method will return a new array each time it is invoked.  The array is ordered based on named group preference, with the first entry being the most preferred.  Providers should ignore unknown named group names while establishing the SSL/TLS/DTLS connections.

**参见**

- #setNamedGroups

> *Since 20*
