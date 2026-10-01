---
id: "java-en-function-java-io-pipedoutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.PipedOutputStream"
title: "PipedOutputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedOutputStream

A piped output stream can be connected to a piped input stream
 to create a communications pipe. The piped output stream is the
 sending end of the pipe. Typically, data is written to a
 `PipedOutputStream` object by one thread and data is
 read from the connected `PipedInputStream` by some
 other thread. Attempting to use both objects from a single thread
 is not recommended as it may deadlock the thread.
 The pipe is said to be  broken  if a
 thread that was reading data bytes from the connected piped input
 stream is no longer alive.

**参见**

- java.io.PipedInputStream

> *Since 1.0*
