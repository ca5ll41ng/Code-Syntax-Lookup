---
id: "java-en-function-string-lines"
language: "java"
lang: "en"
category: "function"
name: "String.lines"
signature: "public Stream<String> lines()"
title: "String.lines"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.lines

```java
public Stream<String> lines()
```

Returns a stream of lines extracted from this string,
 separated by line terminators.
 

 A line terminator is one of the following:
 a line feed character `"\n"` (U+000A),
 a carriage return character `"\r"` (U+000D),
 or a carriage return followed immediately by a line feed
 `"\r\n"` (U+000D U+000A).
 

 A line is either a sequence of zero or more characters
 followed by a line terminator, or it is a sequence of one or
 more characters followed by the end of the string. A
 line does not include the line terminator.
 

 The stream returned by this method contains the lines from
 this string in the order in which they occur.

          string has zero lines and that there is no empty line
          following a line terminator at the end of a string.

           split("\R") by supplying elements lazily and
           by faster search of new line terminators.

**返回**

- the stream of lines extracted from this string

> *Since 11*
