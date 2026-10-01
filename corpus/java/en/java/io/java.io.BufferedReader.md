---
id: "java-en-function-java-io-bufferedreader"
language: "java"
lang: "en"
category: "function"
name: "java.io.BufferedReader"
title: "BufferedReader"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedReader

Reads text from a character-input stream, buffering characters so as to
 provide for the efficient reading of characters, arrays, and lines.

 

 The buffer size may be specified, or the default size may be used.  The
 default is large enough for most purposes.

 

 In general, each read request made of a Reader causes a corresponding
 read request to be made of the underlying character or byte stream.  It is
 therefore advisable to wrap a `BufferedReader` around any
 `Reader` whose `read()` operations may be costly, such as
 `FileReader`s and `InputStreamReader`s.  For
 example,

 {@snippet lang=java :
     BufferedReader in = new BufferedReader(new FileReader("foo.in"));
 }

 will buffer the input from the specified file.  Without buffering, each
 invocation of `read()` or `readLine()` could cause bytes to be
 read from the file, converted into characters, and then returned, which can
 be very inefficient.

 

 Programs that use `DataInputStream`s for textual input can be
 localized by replacing each `DataInputStream` with an appropriate
 `BufferedReader`.

 Once wrapped in a `BufferedReader`, the underlying
 `Reader` should not be used directly nor wrapped with
 another reader.

**参见**

- FileReader
- InputStreamReader
- java.nio.file.Files#newBufferedReader

> *Since 1.1*
