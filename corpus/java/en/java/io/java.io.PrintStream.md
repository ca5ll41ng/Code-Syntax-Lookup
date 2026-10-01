---
id: "java-en-function-java-io-printstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.PrintStream"
title: "PrintStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream

A `PrintStream` adds functionality to another output stream,
 namely the ability to print representations of various data values
 conveniently.  Two other features are provided as well.  Unlike other output
 streams, a `PrintStream` never throws an
 `IOException`; instead, exceptional situations merely set an
 internal flag that can be tested via the `checkError` method.
 Optionally, a `PrintStream` can be created so as to flush
 automatically; this means that the `flush` method of the underlying
 output stream is automatically invoked after a byte array is written, one
 of the `println` methods is invoked, or a newline character or byte
 (`'\n'`) is written.

 

 All characters printed by a `PrintStream` are converted into
 bytes using the given encoding or charset, or the default charset if not
 specified.
 The `PrintWriter` class should be used in situations that require
 writing characters rather than bytes.

 

 This class always replaces malformed and unmappable character sequences
 with the charset's default replacement string.
 The `java.nio.charset.CharsetEncoder` class should be used when more
 control over the encoding process is required.

**参见**

- Charset#defaultCharset()

> *Since 1.0*
