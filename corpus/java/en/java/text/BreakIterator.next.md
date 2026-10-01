---
id: "java-en-function-breakiterator-next"
language: "java"
lang: "en"
category: "function"
name: "BreakIterator.next"
signature: "public abstract int next(int n)"
title: "BreakIterator.next"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/BreakIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BreakIterator.next

```java
public abstract int next(int n)
```

Returns the nth boundary from the current boundary. If either
 the first or last text boundary has been reached, it returns
 `BreakIterator.DONE` and the current position is set to either
 the first or last text boundary depending on which one is reached. Otherwise,
 the iterator's current position is set to the new boundary.
 For example, if the iterator's current position is the mth text boundary
 and three more boundaries exist from the current boundary to the last text
 boundary, the next(2) call will return m + 2. The new text position is set
 to the (m + 2)th text boundary. A next(4) call would return
 `BreakIterator.DONE` and the last text boundary would become the
 new text position.

**参数**

- **n** — which boundary to return.  A value of 0 does nothing.  Negative values move to previous boundaries and positive values move to later boundaries.

**返回**

- The character index of the nth boundary from the current position or `BreakIterator.DONE` if either first or last text boundary has been reached.
