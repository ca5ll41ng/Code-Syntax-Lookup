---
id: "java-en-function-java-lang-io"
language: "java"
lang: "en"
category: "function"
name: "java.lang.IO"
title: "IO"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/IO.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IO

A collection of static methods that provide convenient access to `in`
 and `out` for line-oriented input and output.
 

 The `readln` and `readln` methods decode bytes read from
 `System.in` into characters. The charset used for decoding is specified by the
 `#stdin.encoding stdin.encoding` property. If this property is not present,
 or if the charset it names cannot be loaded, then UTF-8 is used instead. Decoding
 always replaces malformed and unmappable byte sequences with the charset's default
 replacement string.
 

 Charset decoding is set up upon the first call to one of the `readln` methods.
 Decoding may buffer additional bytes beyond those that have been decoded to characters
 returned to the application. After the first call to one of the `readln` methods,
 any subsequent use of `System.in` results in unspecified behavior.

 The expected use case is that certain applications will use only the `readln`
 methods to read from the standard input, and they will not mix these calls with
 other techniques for reading from `System.in`.

> *Since 25*
