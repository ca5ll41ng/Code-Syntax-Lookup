---
id: "java-en-function-bidi-bidi"
language: "java"
lang: "en"
category: "function"
name: "Bidi.Bidi"
signature: "public Bidi(String paragraph, int flags)"
title: "Bidi.Bidi"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi.Bidi

```java
public Bidi(String paragraph, int flags)
```

Create Bidi from the given paragraph of text and base direction.

**参数**

- **paragraph** — a paragraph of text
- **flags** — a collection of flags that control the algorithm.  The algorithm understands the flags DIRECTION_LEFT_TO_RIGHT, DIRECTION_RIGHT_TO_LEFT, DIRECTION_DEFAULT_LEFT_TO_RIGHT, and DIRECTION_DEFAULT_RIGHT_TO_LEFT. Other values are reserved.
