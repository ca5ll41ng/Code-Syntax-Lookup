---
id: "java-en-function-charsequence-compare"
language: "java"
lang: "en"
category: "function"
name: "CharSequence.compare"
signature: "public static int compare(CharSequence cs1, CharSequence cs2)"
title: "CharSequence.compare"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/CharSequence.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharSequence.compare

```java
public static int compare(CharSequence cs1, CharSequence cs2)
```

Compares two `CharSequence` instances lexicographically. Returns a
 negative value, zero, or a positive value if the first sequence is lexicographically
 less than, equal to, or greater than the second, respectively.

 

 The lexicographical ordering of `CharSequence` is defined as follows.
 Consider a `CharSequence` cs of length len to be a
 sequence of char values, cs[0] to cs[len-1]. Suppose k
 is the lowest index at which the corresponding char values from each sequence
 differ. The lexicographic ordering of the sequences is determined by a numeric
 comparison of the char values cs1[k] with cs2[k]. If there is
 no such index k, the shorter sequence is considered lexicographically
 less than the other. If the sequences have the same length, the sequences are
 considered lexicographically equal.

**参数**

- **cs1** — the first `CharSequence`
- **cs2** — the second `CharSequence`

**返回**

- the value `0` if the two `CharSequence` are equal; a negative integer if the first `CharSequence` is lexicographically less than the second; or a positive integer if the first `CharSequence` is lexicographically greater than the second.

> *Since 11*
