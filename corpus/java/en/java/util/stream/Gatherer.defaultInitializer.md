---
id: "java-en-function-gatherer-defaultinitializer"
language: "java"
lang: "en"
category: "function"
name: "Gatherer.defaultInitializer"
signature: "static <A> Supplier<A> defaultInitializer()"
title: "Gatherer.defaultInitializer"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherer.defaultInitializer

```java
static <A> Supplier<A> defaultInitializer()
```

Returns an initializer which is the default initializer of a Gatherer.
 The returned initializer identifies that the owner Gatherer is stateless.

**参数**

- **the** — type of the state of the returned initializer

**返回**

- the instance of the default initializer

**参见**

- Gatherer#initializer()
