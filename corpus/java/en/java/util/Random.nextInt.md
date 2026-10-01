---
id: "java-en-function-random-nextint"
language: "java"
lang: "en"
category: "function"
name: "Random.nextInt"
signature: "public int nextInt()"
title: "Random.nextInt"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.nextInt

```java
public int nextInt()
```

Returns the next pseudorandom, uniformly distributed `int`
 value from this random number generator's sequence. The general
 contract of `nextInt` is that one `int` value is
 pseudorandomly generated and returned. All 232 possible
 `int` values are produced with (approximately) equal probability.

 implemented by class `Random` as if by:
 
```
`public int nextInt() {
   return next(32);
 `}
```

**返回**

- the next pseudorandom, uniformly distributed `int` value from this random number generator's sequence
