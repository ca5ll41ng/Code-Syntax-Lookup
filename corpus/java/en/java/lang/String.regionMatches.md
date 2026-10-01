---
id: "java-en-function-string-regionmatches"
language: "java"
lang: "en"
category: "function"
name: "String.regionMatches"
signature: "public boolean regionMatches(int toffset, String other, int ooffset, int len)"
title: "String.regionMatches"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.regionMatches

```java
public boolean regionMatches(int toffset, String other, int ooffset, int len)
```

Tests if two string regions are equal.
 

 A substring of this `String` object is compared to a substring
 of the argument other. The result is true if these substrings
 represent identical character sequences. The substring of this
 `String` object to be compared begins at index `toffset`
 and has length `len`. The substring of other to be compared
 begins at index `ooffset` and has length `len`. The
 result is `false` if and only if at least one of the following
 is true:
 
- `toffset` is negative.
 
- `ooffset` is negative.
 
- `toffset+len` is greater than the length of this
 `String` object.
 
- `ooffset+len` is greater than the length of the other
 argument.
 
- There is some nonnegative integer k less than `len`
 such that:
 `this.charAt(toffset + `k`) != other.charAt(ooffset + `
 k`)`
 

 

Note that this method does not take locale into account.  The
 `java.text.Collator` class provides locale-sensitive comparison.

**参数**

- **toffset** — the starting offset of the subregion in this string.
- **other** — the string argument.
- **ooffset** — the starting offset of the subregion in the string argument.
- **len** — the number of characters to compare.

**返回**

- `true` if the specified subregion of this string exactly matches the specified subregion of the string argument; `false` otherwise.
