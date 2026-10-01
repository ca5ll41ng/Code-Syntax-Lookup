---
id: "java-en-function-streamablegenerator-of"
language: "java"
lang: "en"
category: "function"
name: "StreamableGenerator.of"
signature: "static StreamableGenerator of(String name)"
title: "StreamableGenerator.of"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamableGenerator.of

```java
static StreamableGenerator of(String name)
```

Returns an instance of `StreamableGenerator` that utilizes the
 `name` algorithm.

**参数**

- **name** — Name of random number generator algorithm

**返回**

- An instance of `StreamableGenerator`

**异常**

- **NullPointerException** — if name is null
- **IllegalArgumentException** — if the named algorithm is not found
