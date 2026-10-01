---
id: "java-en-function-reader-readallasstring"
language: "java"
lang: "en"
category: "function"
name: "Reader.readAllAsString"
signature: "public String readAllAsString() throws IOException"
title: "Reader.readAllAsString"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.readAllAsString

```java
public String readAllAsString() throws IOException
```

Reads all remaining characters into a string. This method blocks until
 all remaining characters including all line separators have been read
 and end of stream is detected, or an exception is thrown. The resulting
 string will contain line separators as they appear in the stream. This
 method does not close the reader.

 

 When this reader reaches the end of the stream, further
 invocations of this method will return an empty string.

 

 The behavior for the case where the reader
 is asynchronously closed, or the thread interrupted during the
 read, is highly reader specific, and therefore not specified.

 

 If an I/O error occurs reading from the stream then it
 may do so after some, but not all, characters have been read.
 Consequently the stream may not be at end of stream and may
 be in an inconsistent state. It is strongly recommended that the reader
 be promptly closed if an I/O error occurs.

 This method is intended for simple cases where it is appropriate and
 convenient to read the entire input into a `String`. It is not
 suitable for reading input from an unknown origin, as this may result
 in the allocation of an arbitrary amount of memory.

**返回**

- a `String` containing all remaining characters

**异常**

- **IOException** — If an I/O error occurs
- **OutOfMemoryError** — If the number of remaining characters exceeds the implementation limit for `String`.

**参见**

- #readAllLines
- java.nio.file.Files#readString

> *Since 25*
