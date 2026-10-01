---
id: "java-en-function-securerandom-getseed"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.getSeed"
signature: "public static byte[] getSeed(int numBytes)"
title: "SecureRandom.getSeed"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.getSeed

```java
public static byte[] getSeed(int numBytes)
```

Returns the given number of seed bytes, computed using the seed
 generation algorithm that this class uses to seed itself.  This
 call may be used to seed other random number generators.

 

This method is only included for backwards compatibility.
 The caller is encouraged to use one of the alternative
 `getInstance` methods to obtain a `SecureRandom` object, and
 then call the `generateSeed` method to obtain seed bytes
 from that object.

**参数**

- **numBytes** — the number of seed bytes to generate.

**返回**

- the seed bytes.

**异常**

- **IllegalArgumentException** — if `numBytes` is negative

**参见**

- #setSeed
