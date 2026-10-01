---
id: "java-en-function-java-util-spliterator-ofprimitive"
language: "java"
lang: "en"
category: "function"
name: "java.util.Spliterator.OfPrimitive"
title: "OfPrimitive"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfPrimitive

A Spliterator specialized for primitive values.

**参数**

- **the** — type of elements returned by this Spliterator.  The type must be a wrapper type for a primitive type, such as `Integer` for the primitive `int` type.
- **the** — type of primitive consumer.  The type must be a primitive specialization of `java.util.function.Consumer` for `T`, such as `java.util.function.IntConsumer` for `Integer`.
- **the** — type of primitive Spliterator.  The type must be a primitive specialization of Spliterator for `T`, such as `Spliterator.OfInt` for `Integer`.

**参见**

- Spliterator.OfInt
- Spliterator.OfLong
- Spliterator.OfDouble

> *Since 1.8*
