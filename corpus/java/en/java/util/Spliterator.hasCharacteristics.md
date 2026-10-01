---
id: "java-en-function-spliterator-hascharacteristics"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.hasCharacteristics"
signature: "default boolean hasCharacteristics(int characteristics)"
title: "Spliterator.hasCharacteristics"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.hasCharacteristics

```java
default boolean hasCharacteristics(int characteristics)
```

Returns `true` if this Spliterator's `characteristics` contain all of the given characteristics.

 The default implementation returns true if the corresponding bits
 of the given characteristics are set.

**参数**

- **characteristics** — the characteristics to check for

**返回**

- `true` if all the specified characteristics are present, else `false`
