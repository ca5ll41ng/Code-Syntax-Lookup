---
id: "java-en-function-java-io-writeabortedexception"
language: "java"
lang: "en"
category: "function"
name: "java.io.WriteAbortedException"
title: "WriteAbortedException"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/WriteAbortedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WriteAbortedException

Signals that one of the ObjectStreamExceptions was thrown during a
 write operation.  Thrown during a read operation when one of the
 ObjectStreamExceptions was thrown during a write operation.  The
 exception that terminated the write can be found in the detail
 field. The stream is reset to its initial state and all references
 to objects already deserialized are discarded.

> *Since 1.1*
