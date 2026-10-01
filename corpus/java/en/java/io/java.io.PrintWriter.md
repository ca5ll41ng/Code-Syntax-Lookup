---
id: "java-en-function-java-io-printwriter"
language: "java"
lang: "en"
category: "function"
name: "java.io.PrintWriter"
title: "PrintWriter"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintWriter

Prints formatted representations of objects to a text-output stream.  This
 class implements all of the `print` methods found in `PrintStream`.  It does not contain methods for writing raw bytes, for which
 a program should use unencoded byte streams.

 

 Unlike the `PrintStream` class, if automatic flushing is enabled
 it will be done only when one of the `println`, `printf`, or
 `format` methods is invoked, rather than whenever a newline character
 happens to be output.  These methods use the platform's own notion of line
 separator rather than the newline character.

 

 Methods in this class never throw I/O exceptions, although some of its
 constructors may.  The client may inquire as to whether any errors have
 occurred by invoking `checkError checkError`.

 

 This class always replaces malformed and unmappable character sequences with
 the charset's default replacement string.
 The `java.nio.charset.CharsetEncoder` class should be used when more
 control over the encoding process is required.

> *Since 1.1*
