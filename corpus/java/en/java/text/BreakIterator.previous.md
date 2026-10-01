---
id: "java-en-function-breakiterator-previous"
language: "java"
lang: "en"
category: "function"
name: "BreakIterator.previous"
signature: "public abstract int previous()"
title: "BreakIterator.previous"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/BreakIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BreakIterator.previous

```java
public abstract int previous()
```

Returns the boundary preceding the current boundary. If the current boundary
 is the first text boundary, it returns `BreakIterator.DONE` and
 the iterator's current position is unchanged. Otherwise, the iterator's
 current position is set to the boundary preceding the current boundary.

**返回**

- The character index of the previous text boundary or `BreakIterator.DONE` if the current boundary is the first text boundary.
