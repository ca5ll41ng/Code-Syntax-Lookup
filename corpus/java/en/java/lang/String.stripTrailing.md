---
id: "java-en-function-string-striptrailing"
language: "java"
lang: "en"
category: "function"
name: "String.stripTrailing"
signature: "public String stripTrailing()"
title: "String.stripTrailing"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.stripTrailing

```java
public String stripTrailing()
```

Returns a string whose value is this string, with all trailing
 `isWhitespace(int) white space` removed.
 

 If this `String` object represents an empty string,
 or if all characters in this string are
 `isWhitespace(int) white space`, then an empty string
 is returned.
 

 Otherwise, returns a substring of this string beginning with the first
 code point of this string up to and including the last code point
 that is not a `isWhitespace(int) white space`.
 

 This method may be used to trim
 `isWhitespace(int) white space` from
 the end of a string.

**返回**

- a string whose value is this string, with all trailing white space removed

**参见**

- Character#isWhitespace(int)

> *Since 11*
