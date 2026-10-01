---
id: "java-en-function-keypairgeneratorspi-generatekeypair"
language: "java"
lang: "en"
category: "function"
name: "KeyPairGeneratorSpi.generateKeyPair"
signature: "public abstract KeyPair generateKeyPair()"
title: "KeyPairGeneratorSpi.generateKeyPair"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyPairGeneratorSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyPairGeneratorSpi.generateKeyPair

```java
public abstract KeyPair generateKeyPair()
```

Generates a key pair. Unless an initialization method is called
 using a KeyPairGenerator interface, algorithm-specific defaults
 will be used. This will generate a new key pair every time it
 is called.

**返回**

- the newly generated `KeyPair`
