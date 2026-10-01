---
id: "java-en-function-securerandom-generateseed"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.generateSeed"
signature: "public byte[] generateSeed(int numBytes)"
title: "SecureRandom.generateSeed"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.generateSeed

```java
public byte[] generateSeed(int numBytes)
```

Returns the given number of seed bytes, computed using the seed
 generation algorithm that this class uses to seed itself.  This
 call may be used to seed other random number generators.

**参数**

- **numBytes** — the number of seed bytes to generate.

**返回**

- the seed bytes.

**异常**

- **IllegalArgumentException** — if `numBytes` is negative
