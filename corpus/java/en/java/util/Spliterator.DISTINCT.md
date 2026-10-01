---
id: "java-en-function-spliterator-distinct"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.DISTINCT"
signature: "public static final int DISTINCT = 0x00000001"
title: "Spliterator.DISTINCT"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.DISTINCT

```java
public static final int DISTINCT = 0x00000001
```

Characteristic value signifying that, for each pair of
 encountered elements `x, y`, `!x.equals(y)`. This
 applies for example, to a Spliterator based on a `Set`.
