---
id: "java-en-function-bufferedreader-lines"
language: "java"
lang: "en"
category: "function"
name: "BufferedReader.lines"
signature: "public Stream<String> lines()"
title: "BufferedReader.lines"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedReader.lines

```java
public Stream<String> lines()
```

Returns a `Stream`, the elements of which are lines read from
 this `BufferedReader`.  The `Stream` is lazily populated,
 i.e., read only occurs during the
 terminal
 stream operation.

 

 The reader must not be operated on during the execution of the
 terminal stream operation. Otherwise, the result of the terminal stream
 operation is undefined.

 

 After execution of the terminal stream operation there are no
 guarantees that the reader will be at a specific position from which to
 read the next character or line.

 

 If an `IOException` is thrown when accessing the underlying
 `BufferedReader`, it is wrapped in an `UncheckedIOException` which will be thrown from the `Stream`
 method that caused the read to take place. This method will return a
 Stream if invoked on a BufferedReader that is closed. Any operation on
 that stream that requires reading from the BufferedReader after it is
 closed, will cause an UncheckedIOException to be thrown.

**返回**

- a `Stream` providing the lines of text described by this `BufferedReader`

> *Since 1.8*
