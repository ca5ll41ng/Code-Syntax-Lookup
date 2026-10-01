---
id: "java-en-function-java-lang-instrument-illegalclassformatexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.instrument.IllegalClassFormatException"
title: "IllegalClassFormatException"
directive: "type"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/IllegalClassFormatException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IllegalClassFormatException

Thrown by an implementation of
 `transform ClassFileTransformer.transform`
 when its input parameters are invalid.
 This may occur either because the initial class file bytes were
 invalid or a previously applied transform corrupted the bytes.

**参见**

- java.lang.instrument.ClassFileTransformer#transform

> *Since 1.5*
