---
id: "java-en-function-breakiterator-following"
language: "java"
lang: "en"
category: "function"
name: "BreakIterator.following"
signature: "public abstract int following(int offset)"
title: "BreakIterator.following"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/BreakIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BreakIterator.following

```java
public abstract int following(int offset)
```

Returns the first boundary following the specified character offset. If the
 specified offset is equal to the last text boundary, it returns
 `BreakIterator.DONE` and the iterator's current position is unchanged.
 Otherwise, the iterator's current position is set to the returned boundary.
 The value returned is always greater than the offset or the value
 `BreakIterator.DONE`.

**参数**

- **offset** — the character offset to begin scanning.

**返回**

- The first boundary after the specified offset or `BreakIterator.DONE` if the last text boundary is passed in as the offset.

**异常**

- **IllegalArgumentException** — if the specified offset is less than the first text boundary or greater than the last text boundary.
