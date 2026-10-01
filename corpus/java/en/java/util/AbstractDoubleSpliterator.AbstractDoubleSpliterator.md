---
id: "java-en-function-abstractdoublespliterator-abstractdoublespliterator"
language: "java"
lang: "en"
category: "function"
name: "AbstractDoubleSpliterator.AbstractDoubleSpliterator"
signature: "protected AbstractDoubleSpliterator(long est, int additionalCharacteristics)"
title: "AbstractDoubleSpliterator.AbstractDoubleSpliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractDoubleSpliterator.AbstractDoubleSpliterator

```java
protected AbstractDoubleSpliterator(long est, int additionalCharacteristics)
```

Creates a spliterator reporting the given estimated size and
 characteristics.

**参数**

- **est** — the estimated size of this spliterator if known, otherwise `Long.MAX_VALUE`.
- **additionalCharacteristics** — properties of this spliterator's source or elements.  If `SIZED` is reported then this spliterator will additionally report `SUBSIZED`.
