---
id: "java-en-function-sslserversocketfactory-getsupportedciphersuites"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocketFactory.getSupportedCipherSuites"
signature: "public abstract String [] getSupportedCipherSuites()"
title: "SSLServerSocketFactory.getSupportedCipherSuites"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocketFactory.getSupportedCipherSuites

```java
public abstract String [] getSupportedCipherSuites()
```

Returns the names of the cipher suites which could be enabled for use
 on an SSL connection created by this factory.
 Normally, only a subset of these will actually
 be enabled by default, since this list may include cipher suites which
 do not meet quality of service requirements for those defaults.  Such
 cipher suites are useful in specialized applications.
 

 The returned array includes cipher suites from the list of standard
 cipher suite names in the 
 JSSE Cipher Suite Names section of the Java Security Standard
 Algorithm Names Specification, and may also include other cipher
 suites that the provider supports.

**返回**

- an array of cipher suite names

**参见**

- #getDefaultCipherSuites()
