---
id: "java-en-function-longstream-range"
language: "java"
lang: "en"
category: "function"
name: "LongStream.range"
signature: "public static LongStream range(long startInclusive, final long endExclusive)"
title: "LongStream.range"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.range

```java
public static LongStream range(long startInclusive, final long endExclusive)
```

Returns a sequential ordered `LongStream` from `startInclusive`
 (inclusive) to `endExclusive` (exclusive) by an incremental step of
 `1`.

 

An equivalent sequence of increasing values can be produced
 sequentially using a `for` loop as follows:
 
```
`for (long i = startInclusive; i < endExclusive ; i++) { ... `
 }
```

**参数**

- **startInclusive** — the (inclusive) initial value
- **endExclusive** — the exclusive upper bound

**返回**

- a sequential `LongStream` for the range of `long` elements
