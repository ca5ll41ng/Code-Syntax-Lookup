---
id: "java-en-function-randomgeneratorfactory-getdefault"
language: "java"
lang: "en"
category: "function"
name: "RandomGeneratorFactory.getDefault"
signature: "public static RandomGeneratorFactory<RandomGenerator> getDefault()"
title: "RandomGeneratorFactory.getDefault"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGeneratorFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGeneratorFactory.getDefault

```java
public static RandomGeneratorFactory<RandomGenerator> getDefault()
```

Returns a `RandomGeneratorFactory` meeting the minimal requirement
 of having an algorithm whose state bits are greater than or equal 64.

 guarantee that this method will return the same algorithm over time.

**返回**

- a `RandomGeneratorFactory`
