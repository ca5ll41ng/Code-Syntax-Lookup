---
id: "java-en-function-sslserversocket-setenabledciphersuites"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.setEnabledCipherSuites"
signature: "public abstract void setEnabledCipherSuites(String[] suites)"
title: "SSLServerSocket.setEnabledCipherSuites"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.setEnabledCipherSuites

```java
public abstract void setEnabledCipherSuites(String[] suites)
```

Sets the cipher suites enabled for use by accepted connections.
 

 The cipher suites must have been listed by getSupportedCipherSuites()
 as being supported.  Following a successful call to this method,
 only suites listed in the suites parameter are enabled
 for use.
 

 Suites that require authentication information which is not available
 in this ServerSocket's authentication context will not be used
 in any case, even if they are enabled.
 

 Note that the standard list of cipher suite names may be found in the
 
 JSSE Cipher Suite Names section of the Java Security Standard
 Algorithm Names Specification.  Providers  may support cipher suite
 names not found in this list or might not use the recommended name
 for a certain cipher suite.
 

 SSLSockets returned from accept()
 inherit this setting.

**参数**

- **suites** — Names of all the cipher suites to enable

**异常**

- **IllegalArgumentException** — when one or more of ciphers named by the parameter is not supported, or when the parameter is null.

**参见**

- #getSupportedCipherSuites()
- #getEnabledCipherSuites()
