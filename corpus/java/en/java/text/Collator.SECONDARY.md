---
id: "java-en-function-collator-secondary"
language: "java"
lang: "en"
category: "function"
name: "Collator.SECONDARY"
signature: "public static final int SECONDARY = 1"
title: "Collator.SECONDARY"
directive: "field"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.SECONDARY

```java
public static final int SECONDARY = 1
```

Collator strength value.  When set, only SECONDARY and above differences are
 considered significant during comparison. The assignment of strengths
 to language features is locale dependent. A common example is for
 different accented forms of the same base letter ("a" vs "ä" (U+00E4)) to be
 considered a SECONDARY difference.

**参见**

- java.text.Collator#setStrength
- java.text.Collator#getStrength
