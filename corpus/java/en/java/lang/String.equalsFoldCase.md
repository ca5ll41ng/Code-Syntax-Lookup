---
id: "java-en-function-string-equalsfoldcase"
language: "java"
lang: "en"
category: "function"
name: "String.equalsFoldCase"
signature: "public boolean equalsFoldCase(String anotherString)"
title: "String.equalsFoldCase"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.equalsFoldCase

```java
public boolean equalsFoldCase(String anotherString)
```

Compares this `String` to another `String` for equality,
 using {@index "Unicode case folding"}. Two strings are considered equal
 by this method if their case-folded forms are identical.
 

 Case folding is defined by the Unicode Standard in
 CaseFolding.txt,
 including 1:M mappings. For example, `"Fuß".equalsFoldCase("FUSS")`
 returns `true`, since the character `U+00DF` (sharp s) folds
 to `"ss"`.
 

 Case folding is locale-independent and language-neutral, unlike
 locale-sensitive transformations such as `toLowerCase` or
 `toUpperCase`. It is intended for caseless matching,
 searching, and indexing.

 This method is the Unicode-compliant alternative to
 `equalsIgnoreCase`. It implements full case folding as
 defined by the Unicode Standard, which may differ from the simpler
 per-character mapping performed by `equalsIgnoreCase`.
 For example:
 {@snippet lang=java :
 String a = "Fuß";
 String b = "FUSS";
 boolean equalsFoldCase = a.equalsFoldCase(b);       // returns true
 boolean equalsIgnoreCase = a.equalsIgnoreCase(b);   // returns false
 }

**参数**

- **anotherString** — The `String` to compare this `String` against

**返回**

- `true` if the given object is not `null` and represents the same sequence of characters as this string under Unicode case folding; `false` otherwise.

**参见**

- #compareToFoldCase(String)
- #equalsIgnoreCase(String)

> *Since 26*
