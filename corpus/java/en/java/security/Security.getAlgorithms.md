---
id: "java-en-function-security-getalgorithms"
language: "java"
lang: "en"
category: "function"
name: "Security.getAlgorithms"
signature: "public static Set<String> getAlgorithms(String serviceName)"
title: "Security.getAlgorithms"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Security.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Security.getAlgorithms

```java
public static Set<String> getAlgorithms(String serviceName)
```

Returns a Set of `String` objects containing the names of all
 available algorithms or types for the specified Java cryptographic
 service (e.g., `Signature`, `MessageDigest`, `Cipher`,
 `Mac`, `KeyStore`).
 Returns an empty set if there is no provider that supports the
 specified service or if `serviceName` is `null`.
 For a complete list of Java cryptographic services, please see the
 `security_guide_jca
 Java Cryptography Architecture (JCA) Reference Guide`.
 Note: the returned set is immutable.

**参数**

- **serviceName** — the name of the Java cryptographic service (e.g., `Signature`, `MessageDigest`, `Cipher`, `Mac`, `KeyStore`). Note: this parameter is case-insensitive.

**返回**

- a Set of `String` objects containing the names of all available algorithms or types for the specified Java cryptographic service or an empty set if no provider supports the specified service.

> *Since 1.4*
