---
id: "java-en-function-longstream-rangeclosed"
language: "java"
lang: "en"
category: "function"
name: "LongStream.rangeClosed"
signature: "public static LongStream rangeClosed(long startInclusive, final long endInclusive)"
title: "LongStream.rangeClosed"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.rangeClosed

```java
public static LongStream rangeClosed(long startInclusive, final long endInclusive)
```

Returns a sequential ordered `LongStream` from `startInclusive`
 (inclusive) to `endInclusive` (inclusive) by an incremental step of
 `1`.

 

An equivalent sequence of increasing values can be produced
 sequentially using a `for` loop as follows:
 
```
`for (long i = startInclusive; i <= endInclusive ; i++) { ... `
 }
```

**参数**

- **startInclusive** — the (inclusive) initial value
- **endInclusive** — the inclusive upper bound

**返回**

- a sequential `LongStream` for the range of `long` elements
