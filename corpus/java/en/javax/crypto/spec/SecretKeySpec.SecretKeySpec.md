---
id: "java-en-function-secretkeyspec-secretkeyspec"
language: "java"
lang: "en"
category: "function"
name: "SecretKeySpec.SecretKeySpec"
signature: "public SecretKeySpec(byte[] key, String algorithm)"
title: "SecretKeySpec.SecretKeySpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/SecretKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecretKeySpec.SecretKeySpec

```java
public SecretKeySpec(byte[] key, String algorithm)
```

Constructs a secret key from the given byte array.

 

This constructor does not check if the given bytes indeed specify a
 secret key of the specified algorithm. For example, if the algorithm is
 DES, this constructor does not check if key is 8 bytes
 long, and also does not check for weak or semi-weak keys.
 In order for those checks to be performed, an algorithm-specific
 key specification class (in this case:
 `DESKeySpec DESKeySpec`)
 should be used.

**参数**

- **key** — the key material of the secret key. The contents of the array are copied to protect against subsequent modification.
- **algorithm** — the name of the secret key algorithm to be associated with the given key material. See the SecretKey Algorithms section in the  Java Security Standard Algorithm Names Specification for information about standard secret key algorithm names.

**异常**

- **IllegalArgumentException** — if algorithm is null or key is null or empty.
