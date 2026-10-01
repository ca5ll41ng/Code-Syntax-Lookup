---
id: "java-en-function-java-io-bufferedwriter"
language: "java"
lang: "en"
category: "function"
name: "java.io.BufferedWriter"
title: "BufferedWriter"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedWriter

Writes text to a character-output stream, buffering characters so as to
 provide for the efficient writing of single characters, arrays, and strings.

 

 The buffer size may be specified, or the default size may be accepted.
 The default is large enough for most purposes.

 

 A `newLine()` method is provided, which uses the platform's own
 notion of line separator as defined by the system property
 `lineSeparator() line.separator`. Not all platforms use the newline character ('\n')
 to terminate lines. Calling this method to terminate each output line is
 therefore preferred to writing a newline character directly.

 

 In general, a `Writer` sends its output immediately to the
 underlying character or byte stream.  Unless prompt output is required, it
 is advisable to wrap a `BufferedWriter` around any `Writer` whose
 `write()` operations may be costly, such as `FileWriter`s and
 `OutputStreamWriter`s.  For example,

 {@snippet lang=java :
     PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter("foo.out")));
 }

 will buffer the `PrintWriter`'s output to the file.  Without buffering,
 each invocation of a `print()` method would cause characters to be
 converted into bytes that would then be written immediately to the file,
 which can be very inefficient.

 Once wrapped in a `BufferedWriter`, the underlying
 `Writer` should not be used directly nor wrapped with
 another writer.

**参见**

- PrintWriter
- FileWriter
- OutputStreamWriter
- java.nio.file.Files#newBufferedWriter

> *Since 1.1*
