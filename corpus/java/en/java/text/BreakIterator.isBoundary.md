---
id: "java-en-function-breakiterator-isboundary"
language: "java"
lang: "en"
category: "function"
name: "BreakIterator.isBoundary"
signature: "public boolean isBoundary(int offset)"
title: "BreakIterator.isBoundary"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/BreakIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BreakIterator.isBoundary

```java
public boolean isBoundary(int offset)
```

Returns true if the specified character offset is a text boundary.

**参数**

- **offset** — the character offset to check.

**返回**

- `true` if "offset" is a boundary position, `false` otherwise.

**异常**

- **IllegalArgumentException** — if the specified offset is less than the first text boundary or greater than the last text boundary.

> *Since 1.2*
