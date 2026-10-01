---
id: "java-en-function-bidi-getlevelat"
language: "java"
lang: "en"
category: "function"
name: "Bidi.getLevelAt"
signature: "public int getLevelAt(int offset)"
title: "Bidi.getLevelAt"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi.getLevelAt

```java
public int getLevelAt(int offset)
```

Return the resolved level of the character at offset.  If offset is
 < 0 or &ge; the length of the line, return the base direction
 level.

**参数**

- **offset** — the index of the character for which to return the level

**返回**

- the resolved level of the character at offset
