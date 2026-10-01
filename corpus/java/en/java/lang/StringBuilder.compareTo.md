---
id: "java-en-function-stringbuilder-compareto"
language: "java"
lang: "en"
category: "function"
name: "StringBuilder.compareTo"
signature: "public int compareTo(StringBuilder another)"
title: "StringBuilder.compareTo"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringBuilder.compareTo

```java
public int compareTo(StringBuilder another)
```

Compares two `StringBuilder` instances lexicographically. This method
 follows the same rules for lexicographical comparison as defined in the
 `compare(java.lang.CharSequence,
 java.lang.CharSequence)  CharSequence.compare` method.

 

 For finer-grained, locale-sensitive String comparison, refer to
 `java.text.Collator`.

**参数**

- **another** — the `StringBuilder` to be compared with

**返回**

- the value `0` if this `StringBuilder` contains the same character sequence as that of the argument `StringBuilder`; a negative integer if this `StringBuilder` is lexicographically less than the `StringBuilder` argument; or a positive integer if this `StringBuilder` is lexicographically greater than the `StringBuilder` argument.

> *Since 11*
