---
id: "java-en-function-java-io-linenumberinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.LineNumberInputStream"
title: "LineNumberInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberInputStream

This class is an input stream filter that provides the added
 functionality of keeping track of the current line number.
 

 A line is a sequence of bytes ending with a carriage return
 character (`'\u005Cr'`), a newline character
 (`'\u005Cn'`), or a carriage return character followed
 immediately by a linefeed character. In all three cases, the line
 terminating character(s) are returned as a single newline character.
 

 The line number begins at `0`, and is incremented by
 `1` when a `read` returns a newline character.

**参见**

- java.io.LineNumberReader

> *Since 1.0*

> **⚠ Deprecated** — This class incorrectly assumes that bytes adequately represent characters.  As of JDK&nbsp;1.1, the preferred way to operate on character streams is via the new character-stream classes, which include a class for counting line numbers.
