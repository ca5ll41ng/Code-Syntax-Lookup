---
id: "java-en-function-java-io-inputstreamreader"
language: "java"
lang: "en"
category: "function"
name: "java.io.InputStreamReader"
title: "InputStreamReader"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStreamReader

An InputStreamReader is a bridge from byte streams to character streams: It
 reads bytes and decodes them into characters using a specified `Charset charset`.  The charset that it uses
 may be specified by name or may be given explicitly, or the
 `defaultCharset() default charset` may be used.

 

 Each invocation of one of an InputStreamReader's read() methods may
 cause one or more bytes to be read from the underlying byte-input stream.
 To enable the efficient conversion of bytes to characters, more bytes may
 be read ahead from the underlying stream than are necessary to satisfy the
 current read operation.

 

 For top efficiency, consider wrapping an InputStreamReader within a
 BufferedReader.  For example:

 {@snippet lang=java :
     BufferedReader in = new BufferedReader(new InputStreamReader(anInputStream));
 }

 

To read from `in`, use the system property value
 `#stdin.encoding stdin.encoding` as the `Charset`:

 {@snippet lang=java :
     new InputStreamReader(System.in, System.getProperty("stdin.encoding"));
 }

**参见**

- BufferedReader
- InputStream
- Charset
- System##stdin.encoding stdin.encoding

> *Since 1.1*
