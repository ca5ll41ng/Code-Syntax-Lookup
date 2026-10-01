---
id: "java-en-function-bidi-reordervisually"
language: "java"
lang: "en"
category: "function"
name: "Bidi.reorderVisually"
signature: "public static void reorderVisually(byte[] levels, int levelStart, Object[] objects, int objectStart, int count)"
title: "Bidi.reorderVisually"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi.reorderVisually

```java
public static void reorderVisually(byte[] levels, int levelStart, Object[] objects, int objectStart, int count)
```

Reorder the objects in the array into visual order based on their levels.
 This is a utility function to use when you have a collection of objects
 representing runs of text in logical order, each run containing text
 at a single level.  The elements at `index` from
 `objectStart` up to `objectStart + count`
 in the objects array will be reordered into visual order assuming
 each run of text has the level indicated by the corresponding element
 in the levels array (at `index - objectStart + levelStart`).

**参数**

- **levels** — an array representing the bidi level of each object
- **levelStart** — the start position in the levels array
- **objects** — the array of objects to be reordered into visual order
- **objectStart** — the start position in the objects array
- **count** — the number of objects to reorder
