---
id: "java-en-function-java-lang-classvalue"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ClassValue"
title: "ClassValue"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassValue

Lazily associate a computed value with any `Class` object.
 For example, if a dynamic language needs to construct a message dispatch
 table for each class encountered at a message send call site,
 it can use a `ClassValue` to cache information needed to
 perform the message send quickly, for each class encountered.
 

 The basic operation of a `ClassValue` is `get get`, which
 returns the associated value, initially created by an invocation to `computeValue computeValue`; multiple invocations may happen under race, but
 exactly one value is associated to a `Class` and returned.
 

 Another operation is `remove remove`: it clears the associated value
 (if it exists), and ensures the next associated value is computed with input
 states up-to-date with the removal.
 

 For a particular association, there is a total order for accesses to the
 associated value.  Accesses are atomic; they include:
 
 
- A read-only access by `get`
 
- An attempt to associate the return value of a `computeValue` by
 `get`
 
- Clearing of an association by `remove`
 

 A `get` call always include at least one access; a `remove` call
 always has exactly one access; a `computeValue` call always happens
 between two accesses.  This establishes the order of `computeValue`
 calls with respect to `remove` calls and determines whether the
 results of a `computeValue` can be successfully associated by a `get`.

**参数**

- **the** — type of the associated value

> *Since 1.7*
