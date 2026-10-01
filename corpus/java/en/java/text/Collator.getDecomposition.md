---
id: "java-en-function-collator-getdecomposition"
language: "java"
lang: "en"
category: "function"
name: "Collator.getDecomposition"
signature: "public synchronized int getDecomposition()"
title: "Collator.getDecomposition"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.getDecomposition

```java
public synchronized int getDecomposition()
```

Get the decomposition mode of this Collator. Decomposition mode
 determines how Unicode composed characters are handled. Adjusting
 decomposition mode allows the user to select between faster and more
 complete collation behavior.
 

The three values for decomposition mode are:
 
 
- NO_DECOMPOSITION,
 
- CANONICAL_DECOMPOSITION
 
- FULL_DECOMPOSITION.
 

 See the documentation for these three constants for a description
 of their meaning.

**返回**

- the decomposition mode

**参见**

- java.text.Collator#setDecomposition
- java.text.Collator#NO_DECOMPOSITION
- java.text.Collator#CANONICAL_DECOMPOSITION
- java.text.Collator#FULL_DECOMPOSITION
