---
id: "java-en-function-random-setseed"
language: "java"
lang: "en"
category: "function"
name: "Random.setSeed"
signature: "public synchronized void setSeed(long seed)"
title: "Random.setSeed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.setSeed

```java
public synchronized void setSeed(long seed)
```

Sets or updates the seed of this random number generator using the
 provided `long` seed value (optional operation).

 The implementation in this class alters the state of this random number
 generator so that it is in the same state as if it had just been created with
 `Random`. It atomically updates the seed to
  
```
`(seed ^ 0x5DEECE66DL) & ((1L << 48) - 1)`
```

 and clears the `haveNextNextGaussian` flag used by `nextGaussian`.
 Note that this uses only 48 bits of the given seed value.

**参数**

- **seed** — the seed value

**异常**

- **UnsupportedOperationException** — if the `setSeed` operation is not supported by this random number generator
