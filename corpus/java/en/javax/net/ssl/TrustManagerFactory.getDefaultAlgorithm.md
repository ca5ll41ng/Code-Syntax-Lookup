---
id: "java-en-function-trustmanagerfactory-getdefaultalgorithm"
language: "java"
lang: "en"
category: "function"
name: "TrustManagerFactory.getDefaultAlgorithm"
signature: "public static final String getDefaultAlgorithm()"
title: "TrustManagerFactory.getDefaultAlgorithm"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/TrustManagerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustManagerFactory.getDefaultAlgorithm

```java
public static final String getDefaultAlgorithm()
```

Obtains the default TrustManagerFactory algorithm name.

 

The default TrustManager can be changed at runtime by setting
 the value of the `ssl.TrustManagerFactory.algorithm`
 security property to the desired algorithm name.

**返回**

- the default algorithm name as specified by the `ssl.TrustManagerFactory.algorithm` security property, or an implementation-specific default if no such property exists.

**参见**

- java.security.Security security properties
