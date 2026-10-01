---
id: "java-en-function-reader-readalllines"
language: "java"
lang: "en"
category: "function"
name: "Reader.readAllLines"
signature: "public List<String> readAllLines() throws IOException"
title: "Reader.readAllLines"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.readAllLines

```java
public List<String> readAllLines() throws IOException
```

Reads all remaining characters as lines of text. This method blocks until
 all remaining characters have been read and end of stream is detected,
 or an exception is thrown. This method does not close the reader.

 

 When this reader reaches the end of the stream, further
 invocations of this method will return an empty list.

 

 A line is either a sequence of zero or more characters
 followed by a line terminator, or it is a sequence of one or
 more characters followed by the end of the stream.
 A line does not include the line terminator.

 

 A line terminator is one of the following:
 a line feed character `"\n"` (U+000A),
 a carriage return character `"\r"` (U+000D),
 or a carriage return followed immediately by a line feed
 `"\r\n"` (U+000D U+000A).

 

 The behavior for the case where the reader is
 asynchronously closed, or the thread interrupted during the
 read, is highly reader specific, and therefore not specified.

 

 If an I/O error occurs reading from the stream then it
 may do so after some, but not all, characters have been read.
 Consequently the stream may not be at end of stream and may
 be in an inconsistent state. It is strongly recommended that the reader
 be promptly closed if an I/O error occurs.

 This method is intended for simple cases where it is appropriate and
 convenient to read the entire input into a list of lines. It is not
 suitable for reading input from an unknown origin, as this may result
 in the allocation of an arbitrary amount of memory.

**返回**

- the remaining characters as lines of text stored in an unmodifiable `List` of `String`s in the order they are read

**异常**

- **IOException** — If an I/O error occurs
- **OutOfMemoryError** — If the number of remaining characters exceeds the implementation limit for `String`.

**参见**

- String#lines
- #readAllAsString
- java.nio.file.Files#readAllLines

> *Since 25*
