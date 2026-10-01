---
id: "java-en-function-security-getalgorithmproperty"
language: "java"
lang: "en"
category: "function"
name: "Security.getAlgorithmProperty"
signature: "public static String getAlgorithmProperty(String algName, String propName)"
title: "Security.getAlgorithmProperty"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Security.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Security.getAlgorithmProperty

```java
public static String getAlgorithmProperty(String algName, String propName)
```

Gets a specified property for an algorithm. The algorithm name
 should be a standard name. See the 
 Java Security Standard Algorithm Names Specification
 for information about standard algorithm names.

 One possible use is by specialized algorithm parsers, which may map
 classes to algorithms which they understand (much like Key parsers
 do).

**参数**

- **algName** — the algorithm name.
- **propName** — the name of the property to get.

**返回**

- the value of the specified property.

> **⚠ Deprecated** — This method used to return the value of a proprietary property in the master file of the "SUN" Cryptographic Service Provider in order to determine how to parse algorithm-specific parameters. Use the new provider-based and algorithm-independent `AlgorithmParameters` and `KeyFactory` engine classes (introduced in the J2SE version 1.2 platform) instead.
