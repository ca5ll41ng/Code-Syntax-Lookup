---
id: "java-en-function-string-comparetoignorecase"
language: "java"
lang: "en"
category: "function"
name: "String.compareToIgnoreCase"
signature: "public int compareToIgnoreCase(String str)"
title: "String.compareToIgnoreCase"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.compareToIgnoreCase

```java
public int compareToIgnoreCase(String str)
```

Compares two strings lexicographically, ignoring case
 differences. This method returns an integer whose sign is that of
 calling `compareTo` with case folded versions of the strings
 where case differences have been eliminated by calling
 `Character.toLowerCase(Character.toUpperCase(int))` on
 each Unicode code point.
 

 Note that this method does not take locale into account,
 and will result in an unsatisfactory ordering for certain locales.
 The `java.text.Collator` class provides locale-sensitive comparison.

**参数**

- **str** — the `String` to be compared.

**返回**

- a negative integer, zero, or a positive integer as the specified String is greater than, equal to, or less than this String, ignoring case considerations.

**参见**

- java.text.Collator
- #codePoints()
- #compareToFoldCase(String)

> *Since 1.2*
