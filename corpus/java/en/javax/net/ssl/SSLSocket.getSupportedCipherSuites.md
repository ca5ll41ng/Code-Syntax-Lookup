---
id: "java-en-function-sslsocket-getsupportedciphersuites"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.getSupportedCipherSuites"
signature: "public abstract String [] getSupportedCipherSuites()"
title: "SSLSocket.getSupportedCipherSuites"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.getSupportedCipherSuites

```java
public abstract String [] getSupportedCipherSuites()
```

Returns the names of the cipher suites which could be enabled for use
 on this connection.  Normally, only a subset of these will actually
 be enabled by default, since this list may include cipher suites which
 do not meet quality of service requirements for those defaults.  Such
 cipher suites might be useful in specialized applications.
 

 The returned array includes cipher suites from the list of standard
 cipher suite names in the 
 JSSE Cipher Suite Names section of the Java Security Standard
 Algorithm Names Specification, and may also include other cipher
 suites that the provider supports.

**返回**

- an array of cipher suite names

**参见**

- #getEnabledCipherSuites()
- #setEnabledCipherSuites(String [])
