---
id: "java-en-function-intstream-range"
language: "java"
lang: "en"
category: "function"
name: "IntStream.range"
signature: "public static IntStream range(int startInclusive, int endExclusive)"
title: "IntStream.range"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.range

```java
public static IntStream range(int startInclusive, int endExclusive)
```

Returns a sequential ordered `IntStream` from `startInclusive`
 (inclusive) to `endExclusive` (exclusive) by an incremental step of
 `1`.

 

An equivalent sequence of increasing values can be produced
 sequentially using a `for` loop as follows:
 
```
`for (int i = startInclusive; i < endExclusive ; i++) { ... `
 }
```

**参数**

- **startInclusive** — the (inclusive) initial value
- **endExclusive** — the exclusive upper bound

**返回**

- a sequential `IntStream` for the range of `int` elements
