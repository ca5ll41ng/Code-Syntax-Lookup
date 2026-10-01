---
id: "java-en-function-dsakeypairgenerator-initialize"
language: "java"
lang: "en"
category: "function"
name: "DSAKeyPairGenerator.initialize"
signature: "void initialize(DSAParams params, SecureRandom random)"
title: "DSAKeyPairGenerator.initialize"
directive: "method"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/DSAKeyPairGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DSAKeyPairGenerator.initialize

```java
void initialize(DSAParams params, SecureRandom random)
```

Initializes the key pair generator using the DSA family parameters
 (p,q and g) and an optional SecureRandom bit source. If a
 SecureRandom bit source is needed but not supplied, i.e. null, a
 default SecureRandom instance will be used.

**参数**

- **params** — the parameters to use to generate the keys.
- **random** — the random bit source to use to generate key bits; can be null.

**异常**

- **InvalidParameterException** — if the `params` value is invalid, null, or unsupported.
