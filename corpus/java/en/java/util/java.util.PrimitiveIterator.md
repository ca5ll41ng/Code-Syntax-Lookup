---
id: "java-en-function-java-util-primitiveiterator"
language: "java"
lang: "en"
category: "function"
name: "java.util.PrimitiveIterator"
title: "PrimitiveIterator"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PrimitiveIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrimitiveIterator

A base type for primitive specializations of `Iterator`.  Specialized
 subtypes are provided for `OfInt int`, `OfLong long`, and
 `OfDouble double` values.

 

The specialized subtype default implementations of `next`
 and `forEachRemaining` box
 primitive values to instances of their corresponding wrapper class.  Such
 boxing may offset any advantages gained when using the primitive
 specializations.  To avoid boxing, the corresponding primitive-based methods
 should be used.  For example, `nextInt` and
 `forEachRemaining`
 should be used in preference to `next` and
 `forEachRemaining`.

 

Iteration of primitive values using boxing-based methods
 `next next` and
 `forEachRemaining`,
 does not affect the order in which the values, transformed to boxed values,
 are encountered.

 If the boolean system property `org.openjdk.java.util.stream.tripwire`
 is set to `true` then diagnostic warnings are reported if boxing of
 primitive values occur when operating on primitive subtype specializations.

**参数**

- **the** — type of elements returned by this PrimitiveIterator.  The type must be a wrapper type for a primitive type, such as `Integer` for the primitive `int` type.
- **the** — type of primitive consumer.  The type must be a primitive specialization of `java.util.function.Consumer` for `T`, such as `java.util.function.IntConsumer` for `Integer`.

> *Since 1.8*
