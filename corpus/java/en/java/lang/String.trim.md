---
id: "java-en-function-string-trim"
language: "java"
lang: "en"
category: "function"
name: "String.trim"
signature: "public String trim()"
title: "String.trim"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.trim

```java
public String trim()
```

Returns a string whose value is this string, with all leading
 and trailing space removed, where space is defined
 as any character whose codepoint is less than or equal to
 `'U+0020'` (the space character).
 

 If this `String` object represents an empty character
 sequence, or the first and last characters of character sequence
 represented by this `String` object both have codes
 that are not space (as defined above), then a
 reference to this `String` object is returned.
 

 Otherwise, if all characters in this string are space (as
 defined above), then a  `String` object representing an
 empty string is returned.
 

 Otherwise, let k be the index of the first character in the
 string whose code is not a space (as defined above) and let
 m be the index of the last character in the string whose code
 is not a space (as defined above). A `String`
 object is returned, representing the substring of this string that
 begins with the character at index k and ends with the
 character at index m-that is, the result of
 `this.substring(k, m + 1)`.

 This method removes leading and trailing space characters and ASCII control
 characters from the string. To remove characters using a Unicode-based definition of
 `isWhitespace(int) white space`, use `strip() strip`,
 `stripIndent() stripIndent`, `stripLeading() stripLeading`, or
 `stripTrailing() stripTrailing`.

**返回**

- a string whose value is this string, with all leading and trailing space removed, or this string if it has no leading or trailing space.
