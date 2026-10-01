---
id: "java-en-function-secretkeyfactory-getkeyspec"
language: "java"
lang: "en"
category: "function"
name: "SecretKeyFactory.getKeySpec"
signature: "public final KeySpec getKeySpec(SecretKey key, Class<?> keySpec) throws InvalidKeySpecException"
title: "SecretKeyFactory.getKeySpec"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SecretKeyFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecretKeyFactory.getKeySpec

```java
public final KeySpec getKeySpec(SecretKey key, Class<?> keySpec) throws InvalidKeySpecException
```

Returns a specification (key material) of the given key object
 in the requested format.

**参数**

- **key** — the key
- **keySpec** — the requested format in which the key material shall be returned

**返回**

- the underlying key specification (key material) in the requested format

**异常**

- **InvalidKeySpecException** — if the requested key specification is inappropriate for the given key (e.g., the algorithms associated with `key` and `keySpec` do not match, or `key` references a key on a cryptographic hardware device whereas `keySpec` is the specification of a software-based key), or the given key cannot be dealt with (e.g., the given key has an algorithm or format not supported by this secret key factory).
