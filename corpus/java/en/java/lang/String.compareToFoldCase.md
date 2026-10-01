---
id: "java-en-function-string-comparetofoldcase"
language: "java"
lang: "en"
category: "function"
name: "String.compareToFoldCase"
signature: "public int compareToFoldCase(String str)"
title: "String.compareToFoldCase"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.compareToFoldCase

```java
public int compareToFoldCase(String str)
```

Compares two strings lexicographically using {@index "Unicode case folding"}.
 This method returns an integer whose sign is that of calling `compareTo`
 on the Unicode case folded version of the strings. Unicode Case folding
 eliminates differences in case according to the Unicode Standard, using the
 mappings defined in
 CaseFolding.txt,
 including 1:M mappings, such as {@code"ß"} → ``"ss"}.
 

 Case folding is a locale-independent, language-neutral form of case mapping,
 primarily intended for caseless matching. Unlike `compareToIgnoreCase`,
 which applies a simpler locale-insensitive uppercase mapping. This method
 follows the Unicode {@index "full"} case folding, providing stable and
 consistent results across all environments.
 

 Note that this method does not take locale into account, and may
 produce results that differ from locale-sensitive ordering. Use
 `java.text.Collator` for locale-sensitive comparison.

 This method is the Unicode-compliant alternative to
 `compareToIgnoreCase`. It implements the
 {@index "full case folding"} as defined by the Unicode Standard, which
 may differ from the simpler per-character mapping performed by
 `compareToIgnoreCase`.
 For example:
 {@snippet lang=java :
 String a = "Fuß";
 String b = "FUSS";
 int cmpFoldCase = a.compareToFoldCase(b);     // returns 0
 int cmpIgnoreCase = a.compareToIgnoreCase(b); // returns > 0
 }

**参数**

- **str** — the `String` to be compared.

**返回**

- a negative integer, zero, or a positive integer as the specified String is greater than, equal to, or less than this String, ignoring case considerations by case folding.

**参见**

- java.text.Collator
- #compareToIgnoreCase(String)
- #equalsFoldCase(String)

> *Since 26*
