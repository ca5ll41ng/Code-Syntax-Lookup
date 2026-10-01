---
id: "java-en-function-bidi-getrunlimit"
language: "java"
lang: "en"
category: "function"
name: "Bidi.getRunLimit"
signature: "public int getRunLimit(int run)"
title: "Bidi.getRunLimit"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi.getRunLimit

```java
public int getRunLimit(int run)
```

Return the index of the character past the end of the nth logical run in this line, as
 an offset from the start of the line.  For example, this will return the length
 of the line for the last run on the line.

**参数**

- **run** — the index of the run, between 0 and `getRunCount()`

**返回**

- limit the limit of the run
