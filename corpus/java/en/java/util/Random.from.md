---
id: "java-en-function-random-from"
language: "java"
lang: "en"
category: "function"
name: "Random.from"
signature: "public static Random from(RandomGenerator generator)"
title: "Random.from"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.from

```java
public static Random from(RandomGenerator generator)
```

Returns an instance of `Random` that delegates method calls to the `RandomGenerator`
 argument. If the generator is an instance of `Random`, it is returned. Otherwise, this method
 returns an instance of `Random` that delegates all methods except `setSeed` to the generator.
 The returned instance's `setSeed` method always throws `UnsupportedOperationException`.
 The returned instance is not serializable.

**参数**

- **generator** — the `RandomGenerator` calls are delegated to

**返回**

- the delegating `Random` instance

**异常**

- **NullPointerException** — if generator is null

> *Since 19*
