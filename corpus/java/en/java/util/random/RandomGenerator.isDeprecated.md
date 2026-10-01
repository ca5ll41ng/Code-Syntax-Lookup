---
id: "java-en-function-randomgenerator-isdeprecated"
language: "java"
lang: "en"
category: "function"
name: "RandomGenerator.isDeprecated"
signature: "default boolean isDeprecated()"
title: "RandomGenerator.isDeprecated"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGenerator.isDeprecated

```java
default boolean isDeprecated()
```

Return true if the implementation of RandomGenerator (algorithm) has been
 marked for deprecation.

 algorithms will be introduced and old algorithms will
 lose standing. If an older algorithm is deemed unsuitable
 for continued use, it will be marked as deprecated to indicate
 that it may be removed at some point in the future.

**返回**

- true if the implementation of RandomGenerator (algorithm) has been marked for deprecation
