---
id: "java-en-function-java-io-pipedinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.PipedInputStream"
title: "PipedInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedInputStream

A piped input stream should be connected
 to a piped output stream; the piped  input
 stream then provides whatever data bytes
 are written to the piped output  stream.
 Typically, data is read from a `PipedInputStream`
 object by one thread  and data is written
 to the corresponding `PipedOutputStream`
 by some  other thread. Attempting to use
 both objects from a single thread is not
 recommended, as it may deadlock the thread.
 The piped input stream contains a buffer,
 decoupling read operations from write operations,
 within limits.
 A pipe is said to be  broken  if a
 thread that was providing data bytes to the connected
 piped output stream is no longer alive.

**参见**

- java.io.PipedOutputStream

> *Since 1.0*
