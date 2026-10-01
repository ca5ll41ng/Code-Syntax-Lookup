---
id: "java-en-function-gatherer-finisher"
language: "java"
lang: "en"
category: "function"
name: "Gatherer.finisher"
signature: "default BiConsumer<A, Downstream<? super R>> finisher()"
title: "Gatherer.finisher"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherer.finisher

```java
default BiConsumer<A, Downstream<? super R>> finisher()
```

A function which accepts the final intermediate state
 and a `Downstream` object, allowing to perform a final action at
 the end of input elements.

           `defaultFinisher`.

**返回**

- a function which transforms the intermediate result to the final result(s) which are then passed on to the provided Downstream
