---
id: "java-en-function-keypairgenerator-initialize"
language: "java"
lang: "en"
category: "function"
name: "KeyPairGenerator.initialize"
signature: "public void initialize(int keysize)"
title: "KeyPairGenerator.initialize"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyPairGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyPairGenerator.initialize

```java
public void initialize(int keysize)
```

Initializes the key pair generator for a certain keysize using
 a default parameter set and the `SecureRandom`
 implementation of the highest-priority installed provider as the source
 of randomness.
 (If none of the installed providers supply an implementation of
 `SecureRandom`, a system-provided source of randomness is
 used.)

**参数**

- **keysize** — the keysize. This is an algorithm-specific metric, such as modulus length, specified in number of bits.

**异常**

- **InvalidParameterException** — if the `keysize` is not supported by this `KeyPairGenerator` object.
