---
id: "java-en-function-gatherers-fold"
language: "java"
lang: "en"
category: "function"
name: "Gatherers.fold"
signature: "public static <T, R> Gatherer<T, ?, R> fold( Supplier<R> initial, BiFunction<? super R, ? super T, ? extends R> folder)"
title: "Gatherers.fold"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherers.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherers.fold

```java
public static <T, R> Gatherer<T, ?, R> fold( Supplier<R> initial, BiFunction<? super R, ? super T, ? extends R> folder)
```

Returns a Gatherer that performs an ordered, reduction-like,
 transformation for scenarios where no combiner-function can be
 implemented, or for reductions which are intrinsically
 order-dependent.

 operation only ever produces a single element.

 

Example:
 {@snippet lang = java:
 // will contain: Optional["123456789"]
 Optional numberString =
     Stream.of(1,2,3,4,5,6,7,8,9)
           .gather(
               Gatherers.fold(() -> "", (string, number) -> string + number)
            )
           .findFirst();
 }

**参数**

- **initial** — the identity value for the fold operation
- **folder** — the folding function
- **the** — type of elements the returned gatherer consumes
- **the** — type of elements the returned gatherer produces

**返回**

- a new Gatherer

**异常**

- **NullPointerException** — if any of the parameters are `null`

**参见**

- java.util.stream.Stream#reduce(Object, BinaryOperator)
