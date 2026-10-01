---
id: "java-en-function-collections-lastindexofsublist"
language: "java"
lang: "en"
category: "function"
name: "Collections.lastIndexOfSubList"
signature: "public static int lastIndexOfSubList(List<?> source, List<?> target)"
title: "Collections.lastIndexOfSubList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.lastIndexOfSubList

```java
public static int lastIndexOfSubList(List<?> source, List<?> target)
```

Returns the starting position of the last occurrence of the specified
 target list within the specified source list, or -1 if there is no such
 occurrence.  More formally, returns the highest index `i`
 such that `source.subList(i, i+target.size()).equals(target)`,
 or -1 if there is no such index.  (Returns -1 if
 `target.size() > source.size()`)

 

This implementation uses the "brute force" technique of iterating
 over the source list, looking for a match with the target at each
 location in turn.

**参数**

- **source** — the list in which to search for the last occurrence of `target`.
- **target** — the list to search for as a subList of `source`.

**返回**

- the starting position of the last occurrence of the specified target list within the specified source list, or -1 if there is no such occurrence.

> *Since 1.4*
