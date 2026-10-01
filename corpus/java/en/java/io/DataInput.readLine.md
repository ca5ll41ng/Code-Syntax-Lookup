---
id: "java-en-function-datainput-readline"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readLine"
signature: "String readLine() throws IOException"
title: "DataInput.readLine"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readLine

```java
String readLine() throws IOException
```

Reads the next line of text from the input stream.
 It reads successive bytes, converting
 each byte separately into a character,
 until it encounters a line terminator or
 end of
 file; the characters read are then
 returned as a `String`. Note
 that because this
 method processes bytes,
 it does not support input of the full Unicode
 character set.
 

 If end of file is encountered
 before even one byte can be read, then `null`
 is returned. Otherwise, each byte that is
 read is converted to type `char`
 by zero-extension. If the character `'\n'`
 is encountered, it is discarded and reading
 ceases. If the character `'\r'`
 is encountered, it is discarded and, if
 the following byte converts to the
 character `'\n'`, then that is
 discarded also; reading then ceases. If
 end of file is encountered before either
 of the characters `'\n'` and
 `'\r'` is encountered, reading
 ceases. Once reading has ceased, a `String`
 is returned that contains all the characters
 read and not discarded, taken in order.
 Note that every character in this string
 will have a value less than `\u005Cu0100`,
 that is, `(char)256`.

**返回**

- the next line of text from the input stream, or `null` if the end of file is encountered before a byte can be read.

**异常**

- **IOException** — if an I/O error occurs.
