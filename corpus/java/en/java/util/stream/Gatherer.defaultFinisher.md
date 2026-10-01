---
id: "java-en-function-gatherer-defaultfinisher"
language: "java"
lang: "en"
category: "function"
name: "Gatherer.defaultFinisher"
signature: "static <A, R> BiConsumer<A, Downstream<? super R>> defaultFinisher()"
title: "Gatherer.defaultFinisher"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherer.defaultFinisher

```java
static <A, R> BiConsumer<A, Downstream<? super R>> defaultFinisher()
```

Returns a `finisher` which is the default finisher of
 a `Gatherer`.
 The returned finisher identifies that the owning Gatherer performs
 no additional actions at the end of input.

**参数**

- **the** — type of the state of the returned finisher
- **the** — type of the Downstream of the returned finisher

**返回**

- the instance of the default finisher

**参见**

- Gatherer#finisher()
