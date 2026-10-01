---
id: "java-en-function-keypairgenerator-genkeypair"
language: "java"
lang: "en"
category: "function"
name: "KeyPairGenerator.genKeyPair"
signature: "public final KeyPair genKeyPair()"
title: "KeyPairGenerator.genKeyPair"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyPairGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyPairGenerator.genKeyPair

```java
public final KeyPair genKeyPair()
```

Generates a key pair.

 

If this `KeyPairGenerator` has not been initialized explicitly,
 provider-specific defaults will be used for the size and other
 (algorithm-specific) values of the generated keys.

 

This will generate a new key pair every time it is called.

 

This method is functionally equivalent to
 `generateKeyPair() generateKeyPair`.

**返回**

- the generated key pair

> *Since 1.2*
