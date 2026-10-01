---
id: "java-en-function-bidi-getrunstart"
language: "java"
lang: "en"
category: "function"
name: "Bidi.getRunStart"
signature: "public int getRunStart(int run)"
title: "Bidi.getRunStart"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi.getRunStart

```java
public int getRunStart(int run)
```

Return the index of the character at the start of the nth logical run in this line, as
 an offset from the start of the line.

**参数**

- **run** — the index of the run, between 0 and `getRunCount()`

**返回**

- the start of the run
