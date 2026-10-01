---
id: "java-en-function-random-next"
language: "java"
lang: "en"
category: "function"
name: "Random.next"
signature: "protected int next(int bits)"
title: "Random.next"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.next

```java
protected int next(int bits)
```

Generates the next pseudorandom number. This method returns an
 `int` value such that, if the argument `bits` is between
 `1` and `32` (inclusive), then that many low-order
 bits of the returned value will be (approximately) independently
 chosen bit values, each of which is (approximately) equally
 likely to be `0` or `1`.

 The other random-producing methods in this class are implemented
 in terms of this method, so subclasses can override just this
 method to provide a different source of pseudorandom numbers for
 the entire class.

 The implementation in this class atomically updates the seed to
  
```
`(seed * 0x5DEECE66DL + 0xBL) & ((1L << 48) - 1)`
```

 and returns
  
```
`(int)(seed >>> (48 - bits))`.
```

 

This is a linear congruential pseudorandom number generator, as
 defined by D. H. Lehmer and described by Donald E. Knuth in
 The Art of Computer Programming, Volume 2, Third edition:
 Seminumerical Algorithms, section 3.2.1.

**参数**

- **bits** — random bits

**返回**

- the next pseudorandom value from this random number generator's sequence

> *Since 1.1*
