---
id: "java-en-function-sslsocket-setenabledciphersuites"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.setEnabledCipherSuites"
signature: "public abstract void setEnabledCipherSuites(String[] suites)"
title: "SSLSocket.setEnabledCipherSuites"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.setEnabledCipherSuites

```java
public abstract void setEnabledCipherSuites(String[] suites)
```

Sets the cipher suites enabled for use on this connection.
 

 Each cipher suite in the suites parameter must have
 been listed by getSupportedCipherSuites(), or the method will
 fail.  Following a successful call to this method, only suites
 listed in the suites parameter are enabled for use.
 

 Note that the standard list of cipher suite names may be found in the
 
 JSSE Cipher Suite Names section of the Java Security Standard
 Algorithm Names Specification. Providers may support cipher suite
 names not found in this list or might not use the recommended name
 for a certain cipher suite.
 

 See `getEnabledCipherSuites` for more information
 on why a specific ciphersuite may never be used on a connection.

**参数**

- **suites** — Names of all the cipher suites to enable

**异常**

- **IllegalArgumentException** — when one or more of the ciphers named by the parameter is not supported, or when the parameter is null.

**参见**

- #getSupportedCipherSuites()
- #getEnabledCipherSuites()
