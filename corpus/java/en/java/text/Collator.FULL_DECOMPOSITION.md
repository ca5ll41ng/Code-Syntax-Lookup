---
id: "java-en-function-collator-full_decomposition"
language: "java"
lang: "en"
category: "function"
name: "Collator.FULL_DECOMPOSITION"
signature: "public static final int FULL_DECOMPOSITION = 2"
title: "Collator.FULL_DECOMPOSITION"
directive: "field"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.FULL_DECOMPOSITION

```java
public static final int FULL_DECOMPOSITION = 2
```

Decomposition mode value. With FULL_DECOMPOSITION
 set, both Unicode canonical variants and Unicode compatibility variants
 will be decomposed for collation.  This causes not only accented
 characters to be collated, but also characters that have special formats
 to be collated with their norminal form. For example, the half-width and
 full-width ASCII and Katakana characters are then collated together.
 FULL_DECOMPOSITION is the most complete and therefore the slowest
 decomposition mode.
 

 FULL_DECOMPOSITION corresponds to Normalization Form KD as
 described in
 Unicode
 Standard Annex #15: Unicode Normalization Forms.

**参见**

- java.text.Collator#getDecomposition
- java.text.Collator#setDecomposition
