---
id: "java-en-function-collator-compare"
language: "java"
lang: "en"
category: "function"
name: "Collator.compare"
signature: "public abstract int compare(String source, String target)"
title: "Collator.compare"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.compare

```java
public abstract int compare(String source, String target)
```

Compares the source string to the target string according to the
 collation rules for this Collator.  Returns an integer less than,
 equal to or greater than zero depending on whether the source String is
 less than, equal to or greater than the target string.  See the Collator
 class description for an example of use.
 

 For a one time comparison, this method has the best performance. If a
 given String will be involved in multiple comparisons, CollationKey.compareTo
 has the best performance. See the Collator class description for an example
 using CollationKeys.

**参数**

- **source** — the source string.
- **target** — the target string.

**返回**

- Returns an integer value. Value is less than zero if source is less than target, value is zero if source and target are equal, value is greater than zero if source is greater than target.

**参见**

- java.text.CollationKey
- java.text.Collator#getCollationKey
