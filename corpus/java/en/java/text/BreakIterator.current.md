---
id: "java-en-function-breakiterator-current"
language: "java"
lang: "en"
category: "function"
name: "BreakIterator.current"
signature: "public abstract int current()"
title: "BreakIterator.current"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/BreakIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BreakIterator.current

```java
public abstract int current()
```

Returns character index of the text boundary that was most
 recently returned by next(), next(int), previous(), first(), last(),
 following(int) or preceding(int). If any of these methods returns
 `BreakIterator.DONE` because either first or last text boundary
 has been reached, it returns the first or last text boundary depending on
 which one is reached.

**返回**

- The text boundary returned from the above methods, first or last text boundary.

**参见**

- #next()
- #next(int)
- #previous()
- #first()
- #last()
- #following(int)
- #preceding(int)
