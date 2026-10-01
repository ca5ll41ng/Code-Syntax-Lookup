---
id: "java-en-function-random-nextlong"
language: "java"
lang: "en"
category: "function"
name: "Random.nextLong"
signature: "public long nextLong()"
title: "Random.nextLong"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.nextLong

```java
public long nextLong()
```

Returns the next pseudorandom, uniformly distributed `long`
 value from this random number generator's sequence. The general
 contract of `nextLong` is that one `long` value is
 pseudorandomly generated and returned.

 as if by:
 
```
`public long nextLong() {
   return ((long)next(32) << 32) + next(32);
 `}
```

 Because class `Random` uses a seed with only 48 bits,
 this algorithm will not return all possible `long` values.

**返回**

- the next pseudorandom, uniformly distributed `long` value from this random number generator's sequence
