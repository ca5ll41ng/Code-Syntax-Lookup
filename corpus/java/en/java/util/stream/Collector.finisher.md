---
id: "java-en-function-collector-finisher"
language: "java"
lang: "en"
category: "function"
name: "Collector.finisher"
signature: "Function<A, R> finisher()"
title: "Collector.finisher"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collector.finisher

```java
Function<A, R> finisher()
```

Perform the final transformation from the intermediate accumulation type
 `A` to the final result type `R`.

 

If the characteristic `IDENTITY_FINISH` is
 set, this function may be presumed to be an identity transform with an
 unchecked cast from `A` to `R`.

**返回**

- a function which transforms the intermediate result to the final result
