---
id: "java-en-function-java-io-filteroutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.FilterOutputStream"
title: "FilterOutputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterOutputStream

This class is the superclass of all classes that filter output
 streams. These streams sit on top of an already existing output
 stream (the underlying output stream) which it uses as its
 basic sink of data, but possibly transforming the data along the
 way or providing additional functionality.
 

 The class `FilterOutputStream` itself simply overrides
 all methods of `OutputStream` with versions that pass
 all requests to the underlying output stream. Subclasses of
 `FilterOutputStream` may further override some of these
 methods as well as provide additional methods and fields.

> *Since 1.0*
