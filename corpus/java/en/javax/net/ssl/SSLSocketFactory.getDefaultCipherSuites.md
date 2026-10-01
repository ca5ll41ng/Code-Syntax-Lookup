---
id: "java-en-function-sslsocketfactory-getdefaultciphersuites"
language: "java"
lang: "en"
category: "function"
name: "SSLSocketFactory.getDefaultCipherSuites"
signature: "public abstract String [] getDefaultCipherSuites()"
title: "SSLSocketFactory.getDefaultCipherSuites"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocketFactory.getDefaultCipherSuites

```java
public abstract String [] getDefaultCipherSuites()
```

Returns the list of cipher suites which are enabled by default.
 Unless a different list is enabled, handshaking on an SSL connection
 will use one of these cipher suites.  The minimum quality of service
 for these defaults requires confidentiality protection and server
 authentication (that is, no anonymous cipher suites).
 

 The returned array includes cipher suites from the list of standard
 cipher suite names in the 
 JSSE Cipher Suite Names section of the Java Security Standard
 Algorithm Names Specification, and may also include other cipher suites
 that the provider supports.

**返回**

- array of the cipher suites enabled by default

**参见**

- #getSupportedCipherSuites()
