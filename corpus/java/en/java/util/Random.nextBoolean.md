---
id: "java-en-function-random-nextboolean"
language: "java"
lang: "en"
category: "function"
name: "Random.nextBoolean"
signature: "public boolean nextBoolean()"
title: "Random.nextBoolean"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.nextBoolean

```java
public boolean nextBoolean()
```

Returns the next pseudorandom, uniformly distributed
 `boolean` value from this random number generator's
 sequence. The general contract of `nextBoolean` is that one
 `boolean` value is pseudorandomly generated and returned.  The
 values `true` and `false` are produced with
 (approximately) equal probability.

 `Random` as if by:
 
```
`public boolean nextBoolean() {
   return next(1) != 0;
 `}
```

**返回**

- the next pseudorandom, uniformly distributed `boolean` value from this random number generator's sequence

> *Since 1.2*
