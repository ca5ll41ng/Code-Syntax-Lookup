---
id: "java-en-function-sslparameters-getciphersuites"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.getCipherSuites"
signature: "public String[] getCipherSuites()"
title: "SSLParameters.getCipherSuites"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.getCipherSuites

```java
public String[] getCipherSuites()
```

Returns a copy of the array of ciphersuites or null if none
 have been set.
 

 The returned array includes cipher suites from the list of standard
 cipher suite names in the 
 JSSE Cipher Suite Names section of the Java Security Standard
 Algorithm Names Specification, and may also include other cipher suites
 that the provider supports.

**返回**

- a copy of the array of ciphersuites or null if none have been set.
