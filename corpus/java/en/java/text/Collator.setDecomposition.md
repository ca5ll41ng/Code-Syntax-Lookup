---
id: "java-en-function-collator-setdecomposition"
language: "java"
lang: "en"
category: "function"
name: "Collator.setDecomposition"
signature: "public synchronized void setDecomposition(int decompositionMode)"
title: "Collator.setDecomposition"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.setDecomposition

```java
public synchronized void setDecomposition(int decompositionMode)
```

Set the decomposition mode of this Collator. See getDecomposition
 for a description of decomposition mode.

**参数**

- **decompositionMode** — the new decomposition mode.

**异常**

- **IllegalArgumentException** — If the given value is not a valid decomposition mode.

**参见**

- java.text.Collator#getDecomposition
- java.text.Collator#NO_DECOMPOSITION
- java.text.Collator#CANONICAL_DECOMPOSITION
- java.text.Collator#FULL_DECOMPOSITION
