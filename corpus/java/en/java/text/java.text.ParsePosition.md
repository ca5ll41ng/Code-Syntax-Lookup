---
id: "java-en-function-java-text-parseposition"
language: "java"
lang: "en"
category: "function"
name: "java.text.ParsePosition"
title: "ParsePosition"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ParsePosition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParsePosition

`ParsePosition` is a simple class used by `Format`
 and its subclasses to keep track of the current position during parsing.
 The `parseObject` method in the various `Format`
 classes requires a `ParsePosition` object as an argument.

 

 By design, as you parse through a string with different formats,
 you can use the same `ParsePosition`, since the index parameter
 records the current position.

**参见**

- java.text.Format

> *Since 1.1*
