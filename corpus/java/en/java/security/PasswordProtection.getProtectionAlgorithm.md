---
id: "java-en-function-passwordprotection-getprotectionalgorithm"
language: "java"
lang: "en"
category: "function"
name: "PasswordProtection.getProtectionAlgorithm"
signature: "public String getProtectionAlgorithm()"
title: "PasswordProtection.getProtectionAlgorithm"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PasswordProtection.getProtectionAlgorithm

```java
public String getProtectionAlgorithm()
```

Gets the name of the protection algorithm.
 If none was set then the keystore provider will use its default
 protection algorithm.

**返回**

- the algorithm name, or `null` if none was set

> *Since 1.8*
