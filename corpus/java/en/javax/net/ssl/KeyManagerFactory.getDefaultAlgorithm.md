---
id: "java-en-function-keymanagerfactory-getdefaultalgorithm"
language: "java"
lang: "en"
category: "function"
name: "KeyManagerFactory.getDefaultAlgorithm"
signature: "public static final String getDefaultAlgorithm()"
title: "KeyManagerFactory.getDefaultAlgorithm"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/KeyManagerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyManagerFactory.getDefaultAlgorithm

```java
public static final String getDefaultAlgorithm()
```

Obtains the default KeyManagerFactory algorithm name.

 

The default algorithm can be changed at runtime by setting
 the value of the `ssl.KeyManagerFactory.algorithm`
 security property to the desired algorithm name.

**返回**

- the default algorithm name as specified by the `ssl.KeyManagerFactory.algorithm` security property, or an implementation-specific default if no such property exists.

**参见**

- java.security.Security security properties
