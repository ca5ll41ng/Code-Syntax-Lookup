---
id: "java-en-function-java-io-outputstreamwriter"
language: "java"
lang: "en"
category: "function"
name: "java.io.OutputStreamWriter"
title: "OutputStreamWriter"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/OutputStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputStreamWriter

An OutputStreamWriter is a bridge from character streams to byte streams:
 Characters written to it are encoded into bytes using a specified `Charset charset`.  The charset that it uses
 may be specified by name or may be given explicitly, or the
 default charset may be accepted.

 

 Each invocation of a write() method causes the encoding converter to be
 invoked on the given character(s).  The resulting bytes are accumulated in a
 buffer before being written to the underlying output stream.  Note that the
 characters passed to the write() methods are not buffered.

 

 For top efficiency, consider wrapping an OutputStreamWriter within a
 BufferedWriter so as to avoid frequent converter invocations.  For example:

 {@snippet lang=java :
     Writer out = new BufferedWriter(new OutputStreamWriter(anOutputStream));
 }

 

 A surrogate pair is a character represented by a sequence of two
 `char` values: A high surrogate in the range '&#92;uD800' to
 '&#92;uDBFF' followed by a low surrogate in the range '&#92;uDC00' to
 '&#92;uDFFF'.

 

 A malformed surrogate element is a high surrogate that is not
 followed by a low surrogate or a low surrogate that is not preceded by a
 high surrogate.

 

 This class always replaces malformed surrogate elements and unmappable
 character sequences with the charset's default substitution sequence.
 The `CharsetEncoder` class should be used when more
 control over the encoding process is required.

**参见**

- BufferedWriter
- OutputStream
- Charset

> *Since 1.1*
