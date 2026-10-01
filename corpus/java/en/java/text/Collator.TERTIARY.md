---
id: "java-en-function-collator-tertiary"
language: "java"
lang: "en"
category: "function"
name: "Collator.TERTIARY"
signature: "public static final int TERTIARY = 2"
title: "Collator.TERTIARY"
directive: "field"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.TERTIARY

```java
public static final int TERTIARY = 2
```

Collator strength value.  When set, only TERTIARY and above differences are
 considered significant during comparison. The assignment of strengths
 to language features is locale dependent. A common example is for
 case differences ("a" vs "A") to be considered a TERTIARY difference.

**参见**

- java.text.Collator#setStrength
- java.text.Collator#getStrength
