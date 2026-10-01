---
id: "java-en-function-collator-identical"
language: "java"
lang: "en"
category: "function"
name: "Collator.IDENTICAL"
signature: "public static final int IDENTICAL = 3"
title: "Collator.IDENTICAL"
directive: "field"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.IDENTICAL

```java
public static final int IDENTICAL = 3
```

Collator strength value.  When set, all differences are
 considered significant during comparison. The assignment of strengths
 to language features is locale dependent. A common example is for control
 characters ("&#092;u0001" vs "&#092;u0002") to be considered equal at the
 PRIMARY, SECONDARY, and TERTIARY levels but different at the IDENTICAL
 level.  Additionally, differences between pre-composed accents such as
 "&#092;u00E4" (a-diaeresis) and combining accents such as "a&#092;u0308"
 (a, combining-diaeresis) will be considered significant at the IDENTICAL
 level if decomposition is set to NO_DECOMPOSITION.
