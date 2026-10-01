---
id: "java-en-function-java-io-sequenceinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.SequenceInputStream"
title: "SequenceInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/SequenceInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceInputStream

A `SequenceInputStream` represents
 the logical concatenation of other input
 streams. It starts out with an ordered
 collection of input streams and reads from
 the first one until end of file is reached,
 whereupon it reads from the second one,
 and so on, until end of file is reached
 on the last of the contained input streams.

> *Since 1.0*
