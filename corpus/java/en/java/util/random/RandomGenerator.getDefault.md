---
id: "java-en-function-randomgenerator-getdefault"
language: "java"
lang: "en"
category: "function"
name: "RandomGenerator.getDefault"
signature: "static RandomGenerator getDefault()"
title: "RandomGenerator.getDefault"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGenerator.getDefault

```java
static RandomGenerator getDefault()
```

Returns a `RandomGenerator` meeting the minimal requirement
 of having an algorithm
 whose state bits are greater than or equal 64.

 guarantee that this method will return the same algorithm over time.
 

 The default implementation selects L32X64MixRandom.

**返回**

- a `RandomGenerator`
