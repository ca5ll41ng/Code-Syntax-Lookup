---
id: "java-en-function-string-compareto"
language: "java"
lang: "en"
category: "function"
name: "String.compareTo"
signature: "public int compareTo(String anotherString)"
title: "String.compareTo"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.compareTo

```java
public int compareTo(String anotherString)
```

Compares two strings lexicographically.
 The comparison is based on the Unicode value of each character in
 the strings. The character sequence represented by this
 `String` object is compared lexicographically to the
 character sequence represented by the argument string. The result is
 a negative integer if this `String` object
 lexicographically precedes the argument string. The result is a
 positive integer if this `String` object lexicographically
 follows the argument string. The result is zero if the strings
 are equal; `compareTo` returns `0` exactly when
 the `equals` method would return `true`.
 

 This is the definition of lexicographic ordering. If two strings are
 different, then either they have different characters at some index
 that is a valid index for both strings, or their lengths are different,
 or both. If they have different characters at one or more index
 positions, let k be the smallest such index; then the string
 whose character at position k has the smaller value, as
 determined by using the `<` operator, lexicographically precedes the
 other string. In this case, `compareTo` returns the
 difference of the two character values at position `k` in
 the two string -- that is, the value:
 
```

 this.charAt(k)-anotherString.charAt(k)
 
```

 If there is no index position at which they differ, then the shorter
 string lexicographically precedes the longer string. In this case,
 `compareTo` returns the difference of the lengths of the
 strings -- that is, the value:
 
```

 this.length()-anotherString.length()
 
```

 

For finer-grained String comparison, refer to
 `java.text.Collator`.

**参数**

- **anotherString** — the `String` to be compared.

**返回**

- the value `0` if the argument string is equal to this string; a value less than `0` if this string is lexicographically less than the string argument; and a value greater than `0` if this string is lexicographically greater than the string argument.
