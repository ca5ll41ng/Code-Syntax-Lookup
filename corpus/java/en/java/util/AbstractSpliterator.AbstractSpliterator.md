---
id: "java-en-function-abstractspliterator-abstractspliterator"
language: "java"
lang: "en"
category: "function"
name: "AbstractSpliterator.AbstractSpliterator"
signature: "protected AbstractSpliterator(long est, int additionalCharacteristics)"
title: "AbstractSpliterator.AbstractSpliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSpliterator.AbstractSpliterator

```java
protected AbstractSpliterator(long est, int additionalCharacteristics)
```

Creates a spliterator reporting the given estimated size and
 additionalCharacteristics.

**参数**

- **est** — the estimated size of this spliterator if known, otherwise `Long.MAX_VALUE`.
- **additionalCharacteristics** — properties of this spliterator's source or elements.  If `SIZED` is reported then this spliterator will additionally report `SUBSIZED`.
