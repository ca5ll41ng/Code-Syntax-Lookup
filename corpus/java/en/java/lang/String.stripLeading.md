---
id: "java-en-function-string-stripleading"
language: "java"
lang: "en"
category: "function"
name: "String.stripLeading"
signature: "public String stripLeading()"
title: "String.stripLeading"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.stripLeading

```java
public String stripLeading()
```

Returns a string whose value is this string, with all leading
 `isWhitespace(int) white space` removed.
 

 If this `String` object represents an empty string,
 or if all code points in this string are
 `isWhitespace(int) white space`, then an empty string
 is returned.
 

 Otherwise, returns a substring of this string beginning with the first
 code point that is not a `isWhitespace(int) white space`
 up to and including the last code point of this string.
 

 This method may be used to trim
 `isWhitespace(int) white space` from
 the beginning of a string.

**返回**

- a string whose value is this string, with all leading white space removed

**参见**

- Character#isWhitespace(int)

> *Since 11*
