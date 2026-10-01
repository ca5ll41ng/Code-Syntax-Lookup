---
id: "java-en-function-java-io-pushbackinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.PushbackInputStream"
title: "PushbackInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackInputStream

A `PushbackInputStream` adds
 functionality to another input stream, namely
 the  ability to "push back" or "unread" bytes,
 by storing pushed-back bytes in an internal buffer.
 This is useful in situations where
 it is convenient for a fragment of code
 to read an indefinite number of data bytes
 that  are delimited by a particular byte
 value; after reading the terminating byte,
 the  code fragment can "unread" it, so that
 the next read operation on the input stream
 will reread the byte that was pushed back.
 For example, bytes representing the  characters
 constituting an identifier might be terminated
 by a byte representing an  operator character;
 a method whose job is to read just an identifier
 can read until it  sees the operator and
 then push the operator back to be re-read.

> *Since 1.0*
