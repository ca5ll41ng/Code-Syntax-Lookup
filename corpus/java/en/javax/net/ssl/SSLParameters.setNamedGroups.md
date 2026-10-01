---
id: "java-en-function-sslparameters-setnamedgroups"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setNamedGroups"
signature: "public void setNamedGroups(String[] namedGroups)"
title: "SSLParameters.setNamedGroups"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setNamedGroups

```java
public void setNamedGroups(String[] namedGroups)
```

Sets the prioritized array of key exchange named groups names that
 can be used over the SSL/TLS/DTLS protocols.
 

 Note that the standard list of key exchange named groups are defined in
 the 
 Named Groups section of the Java Security Standard Algorithm
 Names Specification.  Providers may support named groups not defined
 in this list or may not use the recommended name for a certain named
 group.
 

 The set of named groups that will be used over the SSL/TLS/DTLS
 connections is determined by the input parameter `namedGroups`
 array and the underlying provider-specific default named groups.
 See `getNamedGroups` for specific details on how the
 parameters are used in SSL/TLS/DTLS connections.

 Note that a provider may not have been updated to support this method
 and in that case may ignore the named groups that are set.

 The SunJSSE provider supports this method.

**参数**

- **namedGroups** — an ordered array of key exchange named group names with the first entry being the most preferred, or `null`. This method will make a copy of this array. Providers should ignore unknown named group scheme names while establishing the SSL/TLS/DTLS connections.

**异常**

- **IllegalArgumentException** — if any element in the `namedGroups` array is a duplicate, `null` or `isBlank() blank`.

**参见**

- #getNamedGroups

> *Since 20*
