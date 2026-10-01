---
id: "java-en-function-gatherer-andthen"
language: "java"
lang: "en"
category: "function"
name: "Gatherer.andThen"
signature: "default <RR> Gatherer<T, ?, RR> andThen(Gatherer<? super R, ?, ? extends RR> that)"
title: "Gatherer.andThen"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherer.andThen

```java
default <RR> Gatherer<T, ?, RR> andThen(Gatherer<? super R, ?, ? extends RR> that)
```

Returns a composed Gatherer which connects the output of this Gatherer
 to the input of that Gatherer.

           which is semantically equivalent to the combination of
           `this` and `that` gatherer.

**参数**

- **that** — the other gatherer
- **The** — type of output of that Gatherer

**返回**

- returns a composed Gatherer which connects the output of this Gatherer as input that Gatherer

**异常**

- **NullPointerException** — if the argument is `null`
