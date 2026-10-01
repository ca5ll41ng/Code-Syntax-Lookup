---
id: "java-en-function-sslparameters-setciphersuites"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setCipherSuites"
signature: "public void setCipherSuites(String[] cipherSuites)"
title: "SSLParameters.setCipherSuites"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setCipherSuites

```java
public void setCipherSuites(String[] cipherSuites)
```

Sets the array of ciphersuites.

**参数**

- **cipherSuites** — the array of ciphersuites (or null).  Note that the standard list of cipher suite names may be found in the JSSE Cipher Suite Names section of the Java Security Standard Algorithm Names Specification.  Providers may support cipher suite names not found in this list or might not use the recommended name for a certain cipher suite.
