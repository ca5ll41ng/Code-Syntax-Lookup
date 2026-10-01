---
id: "java-en-function-java-io-interruptedioexception"
language: "java"
lang: "en"
category: "function"
name: "java.io.InterruptedIOException"
title: "InterruptedIOException"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InterruptedIOException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InterruptedIOException

Signals that an I/O operation has been interrupted. An
 `InterruptedIOException` is thrown to indicate that an
 input or output transfer has been terminated because the thread
 performing it was interrupted. The field `bytesTransferred`
 indicates how many bytes were successfully transferred before
 the interruption occurred.

**参见**

- java.io.InputStream
- java.io.OutputStream
- java.lang.Thread#interrupt()

> *Since 1.0*
