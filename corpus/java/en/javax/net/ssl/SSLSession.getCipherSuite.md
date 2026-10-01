---
id: "java-en-function-sslsession-getciphersuite"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getCipherSuite"
signature: "String getCipherSuite()"
title: "SSLSession.getCipherSuite"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getCipherSuite

```java
String getCipherSuite()
```

Returns the name of the SSL cipher suite which is used for all
 connections in the session.

 

 This defines the level of protection
 provided to the data sent on the connection, including the kind
 of encryption used and most aspects of how authentication is done.

**返回**

- the name of the session's cipher suite
