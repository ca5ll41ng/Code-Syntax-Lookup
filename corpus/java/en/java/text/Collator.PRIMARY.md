---
id: "java-en-function-collator-primary"
language: "java"
lang: "en"
category: "function"
name: "Collator.PRIMARY"
signature: "public static final int PRIMARY = 0"
title: "Collator.PRIMARY"
directive: "field"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.PRIMARY

```java
public static final int PRIMARY = 0
```

Collator strength value.  When set, only PRIMARY differences are
 considered significant during comparison. The assignment of strengths
 to language features is locale dependent. A common example is for
 different base letters ("a" vs "b") to be considered a PRIMARY difference.

**参见**

- java.text.Collator#setStrength
- java.text.Collator#getStrength
