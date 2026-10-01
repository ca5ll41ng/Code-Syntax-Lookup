---
id: "java-en-function-collator-canonical_decomposition"
language: "java"
lang: "en"
category: "function"
name: "Collator.CANONICAL_DECOMPOSITION"
signature: "public static final int CANONICAL_DECOMPOSITION = 1"
title: "Collator.CANONICAL_DECOMPOSITION"
directive: "field"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.CANONICAL_DECOMPOSITION

```java
public static final int CANONICAL_DECOMPOSITION = 1
```

Decomposition mode value. With CANONICAL_DECOMPOSITION
 set, characters that are canonical variants according to Unicode
 standard will be decomposed for collation. This should be used to get
 correct collation of accented characters.
 

 CANONICAL_DECOMPOSITION corresponds to Normalization Form D as
 described in
 Unicode
 Standard Annex #15: Unicode Normalization Forms.

**参见**

- java.text.Collator#getDecomposition
- java.text.Collator#setDecomposition
