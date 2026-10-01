---
id: "java-en-function-collectors-collectingandthen"
language: "java"
lang: "en"
category: "function"
name: "Collectors.collectingAndThen"
signature: "public static<T,A,R,RR> Collector<T,A,RR> collectingAndThen(Collector<T,A,R> downstream, Function<R,RR> finisher)"
title: "Collectors.collectingAndThen"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.collectingAndThen

```java
public static<T,A,R,RR> Collector<T,A,RR> collectingAndThen(Collector<T,A,R> downstream, Function<R,RR> finisher)
```

Adapts a `Collector` to perform an additional finishing
 transformation.  For example, one could adapt the `toList`
 collector to always produce an immutable list with:
 
```
`List list = people.stream().collect(
   collectingAndThen(toList(),
                     Collections::unmodifiableList));
 `
```

**参数**

- **the** — type of the input elements
- **intermediate** — accumulation type of the downstream collector
- **result** — type of the downstream collector
- **result** — type of the resulting collector
- **downstream** — a collector
- **finisher** — a function to be applied to the final result of the downstream collector

**返回**

- a collector which performs the action of the downstream collector, followed by an additional finishing step
