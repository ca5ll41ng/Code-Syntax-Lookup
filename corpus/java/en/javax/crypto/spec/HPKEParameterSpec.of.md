---
id: "java-en-function-hpkeparameterspec-of"
language: "java"
lang: "en"
category: "function"
name: "HPKEParameterSpec.of"
signature: "public static HPKEParameterSpec of(int kem_id, int kdf_id, int aead_id)"
title: "HPKEParameterSpec.of"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HPKEParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HPKEParameterSpec.of

```java
public static HPKEParameterSpec of(int kem_id, int kdf_id, int aead_id)
```

A factory method to create a new `HPKEParameterSpec` object with
 specified KEM, KDF, and AEAD algorithm identifiers in `mode_base`
 mode with an empty `info`.

**参数**

- **kem_id** — algorithm identifier for KEM, must be between 0 and 65535 (inclusive)
- **kdf_id** — algorithm identifier for KDF, must be between 0 and 65535 (inclusive)
- **aead_id** — algorithm identifier for AEAD, must be between 0 and 65535 (inclusive)

**返回**

- a new `HPKEParameterSpec` object

**异常**

- **IllegalArgumentException** — if any input value is out of range (must be between 0 and 65535, inclusive).
