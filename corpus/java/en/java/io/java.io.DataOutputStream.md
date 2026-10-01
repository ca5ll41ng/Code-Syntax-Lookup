---
id: "java-en-function-java-io-dataoutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.DataOutputStream"
title: "DataOutputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream

A data output stream lets an application write primitive Java data
 types to an output stream in a portable way. An application can
 then use a data input stream to read the data back in. A data output
 stream wraps another output stream and delegates writing bytes to the
 write methods of that output stream. Writing data consisting of more than
 a single byte may cause several writes to the underlying output stream.
 

 A DataOutputStream is not safe for use by multiple concurrent
 threads. If a DataOutputStream is to be used by more than one
 thread then access to the data output stream should be controlled
 by appropriate synchronization.

**参见**

- java.io.DataInputStream

> *Since 1.0*
