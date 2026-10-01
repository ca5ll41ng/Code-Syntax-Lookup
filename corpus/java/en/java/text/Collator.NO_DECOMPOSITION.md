---
id: "java-en-function-collator-no_decomposition"
language: "java"
lang: "en"
category: "function"
name: "Collator.NO_DECOMPOSITION"
signature: "public static final int NO_DECOMPOSITION = 0"
title: "Collator.NO_DECOMPOSITION"
directive: "field"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.NO_DECOMPOSITION

```java
public static final int NO_DECOMPOSITION = 0
```

Decomposition mode value. With NO_DECOMPOSITION
 set, accented characters will not be decomposed for collation. This
 setting provides the fastest collation but
 will only produce correct results for languages that do not use accents.

**参见**

- java.text.Collator#getDecomposition
- java.text.Collator#setDecomposition
