---
id: "java-en-function-sslserversocket-getenabledciphersuites"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.getEnabledCipherSuites"
signature: "public abstract String [] getEnabledCipherSuites()"
title: "SSLServerSocket.getEnabledCipherSuites"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.getEnabledCipherSuites

```java
public abstract String [] getEnabledCipherSuites()
```

Returns the list of cipher suites which are currently enabled
 for use by newly accepted connections.
 

 If this list has not been explicitly modified, a system-provided
 default guarantees a minimum quality of service in all enabled
 cipher suites.
 

 Note that even if a suite is enabled, it may never be used. This
 can occur if the peer does not support it, or its use is restricted,
 or the requisite certificates (and private keys) for the suite are
 not available, or an anonymous suite is enabled but authentication
 is required.
 

 The returned array includes cipher suites from the list of standard
 cipher suite names in the 
 JSSE Cipher Suite Names section of the Java Security Standard
 Algorithm Names Specification, and may also include other cipher
 suites that the provider supports.

**返回**

- an array of cipher suites enabled

**参见**

- #getSupportedCipherSuites()
- #setEnabledCipherSuites(String[])
