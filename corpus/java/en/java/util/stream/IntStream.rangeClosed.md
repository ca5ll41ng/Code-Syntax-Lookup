---
id: "java-en-function-intstream-rangeclosed"
language: "java"
lang: "en"
category: "function"
name: "IntStream.rangeClosed"
signature: "public static IntStream rangeClosed(int startInclusive, int endInclusive)"
title: "IntStream.rangeClosed"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.rangeClosed

```java
public static IntStream rangeClosed(int startInclusive, int endInclusive)
```

Returns a sequential ordered `IntStream` from `startInclusive`
 (inclusive) to `endInclusive` (inclusive) by an incremental step of
 `1`.

 

An equivalent sequence of increasing values can be produced
 sequentially using a `for` loop as follows:
 
```
`for (int i = startInclusive; i <= endInclusive ; i++) { ... `
 }
```

**参数**

- **startInclusive** — the (inclusive) initial value
- **endInclusive** — the inclusive upper bound

**返回**

- a sequential `IntStream` for the range of `int` elements
