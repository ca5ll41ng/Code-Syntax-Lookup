---
id: "java-en-function-keypairgeneratorspi-initialize"
language: "java"
lang: "en"
category: "function"
name: "KeyPairGeneratorSpi.initialize"
signature: "public abstract void initialize(int keysize, SecureRandom random)"
title: "KeyPairGeneratorSpi.initialize"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyPairGeneratorSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyPairGeneratorSpi.initialize

```java
public abstract void initialize(int keysize, SecureRandom random)
```

Initializes the key pair generator for a certain keysize, using
 the default parameter set.

**参数**

- **keysize** — the keysize. This is an algorithm-specific metric, such as modulus length, specified in number of bits.
- **random** — the source of randomness for this generator.

**异常**

- **InvalidParameterException** — if the `keysize` is not supported by this `KeyPairGeneratorSpi` object.
