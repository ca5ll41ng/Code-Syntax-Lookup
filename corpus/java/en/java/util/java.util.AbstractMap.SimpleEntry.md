---
id: "java-en-function-java-util-abstractmap-simpleentry"
language: "java"
lang: "en"
category: "function"
name: "java.util.AbstractMap.SimpleEntry"
title: "SimpleEntry"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleEntry

An Entry maintaining a key and a value.  The value may be
 changed using the `setValue` method. Instances of
 this class are not associated with any map nor with any
 map's entry-set view.

 This class facilitates the process of building custom map
 implementations. For example, it may be convenient to return
 arrays of `SimpleEntry` instances in method
 `Map.entrySet().toArray`.

**参数**

- **the** — type of key
- **the** — type of the value

> *Since 1.6*
