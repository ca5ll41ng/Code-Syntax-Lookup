---
id: "java-en-function-securerandom-setseed"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.setSeed"
signature: "public void setSeed(byte[] seed)"
title: "SecureRandom.setSeed"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.setSeed

```java
public void setSeed(byte[] seed)
```

Reseeds this random object with the given seed. The seed supplements,
 rather than replaces, the existing seed. Thus, repeated calls are
 guaranteed never to reduce randomness.
 

 A PRNG `SecureRandom` will not seed itself automatically if
 `setSeed` is called before any `nextBytes` or `reseed`
 calls. The caller should make sure that the `seed` argument
 contains enough entropy for the security of this `SecureRandom`.

**参数**

- **seed** — the seed.

**异常**

- **NullPointerException** — if `seed` is `null`

**参见**

- #getSeed
