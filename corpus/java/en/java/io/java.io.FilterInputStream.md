---
id: "java-en-function-java-io-filterinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.FilterInputStream"
title: "FilterInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterInputStream

A `FilterInputStream` wraps some other input stream, which it uses as
 its basic source of data, possibly transforming the data along the way or
 providing additional functionality. The class `FilterInputStream`
 itself simply overrides select methods of `InputStream` with versions
 that pass all requests to the wrapped input stream. Subclasses of
 `FilterInputStream` may of course override any methods declared or
 inherited by `FilterInputStream`, and may also provide additional
 fields and methods.

> *Since 1.0*
