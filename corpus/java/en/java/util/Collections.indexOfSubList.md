---
id: "java-en-function-collections-indexofsublist"
language: "java"
lang: "en"
category: "function"
name: "Collections.indexOfSubList"
signature: "public static int indexOfSubList(List<?> source, List<?> target)"
title: "Collections.indexOfSubList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.indexOfSubList

```java
public static int indexOfSubList(List<?> source, List<?> target)
```

Returns the starting position of the first occurrence of the specified
 target list within the specified source list, or -1 if there is no
 such occurrence.  More formally, returns the lowest index `i`
 such that `source.subList(i, i+target.size()).equals(target)`,
 or -1 if there is no such index.  (Returns -1 if
 `target.size() > source.size()`)

 

This implementation uses the "brute force" technique of scanning
 over the source list, looking for a match with the target at each
 location in turn.

**参数**

- **source** — the list in which to search for the first occurrence of `target`.
- **target** — the list to search for as a subList of `source`.

**返回**

- the starting position of the first occurrence of the specified target list within the specified source list, or -1 if there is no such occurrence.

> *Since 1.4*
