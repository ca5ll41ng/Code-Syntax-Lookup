---
id: "java-en-function-java-lang-foreign-valuelayout"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.ValueLayout"
title: "ValueLayout"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/ValueLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueLayout

A layout that models values of basic data types. Examples of values modeled by
 a value layout are integral values (either signed or unsigned),
 floating-point values and address values.
 

 Each value layout has a size, an alignment (both expressed in bytes),
 a `ByteOrder byte order`, and a carrier, that is, the Java type
 that should be used when `get(OfInt, long) accessing` a
 region of memory using the value layout.
 

 This class defines useful value layout constants for Java primitive types and
 addresses.

          For instance, the byte order of these constants is set to the
          `nativeOrder() native byte order`, thus making it easy
          to work with other APIs, such as arrays and `java.nio.ByteBuffer`.

 value-based.

> *Since 22*
