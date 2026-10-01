---
id: "java-en-function-chacha20parameterspec-chacha20parameterspec"
language: "java"
lang: "en"
category: "function"
name: "ChaCha20ParameterSpec.ChaCha20ParameterSpec"
signature: "public ChaCha20ParameterSpec(byte[] nonce, int counter)"
title: "ChaCha20ParameterSpec.ChaCha20ParameterSpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/ChaCha20ParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChaCha20ParameterSpec.ChaCha20ParameterSpec

```java
public ChaCha20ParameterSpec(byte[] nonce, int counter)
```

Constructs a parameter set for ChaCha20 from the given nonce
 and counter.

**参数**

- **nonce** — a 12-byte nonce value
- **counter** — the initial counter value

**异常**

- **NullPointerException** — if `nonce` is `null`
- **IllegalArgumentException** — if `nonce` is not 12 bytes in length
