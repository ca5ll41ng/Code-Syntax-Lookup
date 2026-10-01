---
id: "java-en-function-java-io-linenumberreader"
language: "java"
lang: "en"
category: "function"
name: "java.io.LineNumberReader"
title: "LineNumberReader"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberReader

A buffered character-input stream that keeps track of line numbers.  This
 class defines methods `setLineNumber` and `getLineNumber` for setting and getting the current line number
 respectively.

 

 By default, line numbering begins at 0. This number increments at every
 line terminator as the data is read, and at the end of the
 stream if the last character in the stream is not a line terminator.  This
 number can be changed with a call to `setLineNumber(int)`.  Note
 however, that `setLineNumber(int)` does not actually change the current
 position in the stream; it only changes the value that will be returned by
 `getLineNumber()`.

 

 A line is considered to be terminated by any one of a
 line feed ('\n'), a carriage return ('\r'), or a carriage return followed
 immediately by a linefeed, or any of the previous terminators followed by
 end of stream, or end of stream not preceded by another terminator.

> *Since 1.1*
