---
id: "java-en-function-encapsulated-encapsulated"
language: "java"
lang: "en"
category: "function"
name: "Encapsulated.Encapsulated"
signature: "public Encapsulated(SecretKey key, byte[] encapsulation, byte[] params)"
title: "Encapsulated.Encapsulated"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Encapsulated.Encapsulated

```java
public Encapsulated(SecretKey key, byte[] encapsulation, byte[] params)
```

Constructs an `Encapsulated` object.

**参数**

- **key** — the shared secret as a key, must not be `null`.
- **encapsulation** — the key encapsulation message, must not be `null`. The contents of the array are copied to protect against subsequent modification.
- **params** — optional parameters, can be `null`. The contents of the array are copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if `key` or `encapsulation` is `null`
