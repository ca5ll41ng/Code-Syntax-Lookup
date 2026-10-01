---
id: "java-en-function-java-lang-classfile-compoundelement"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.CompoundElement"
title: "CompoundElement"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CompoundElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundElement

A `class` file structure that can be viewed as a composition of its
 member structures.  `CompoundElement` allows users to traverse these
 member elements with `forEach` or `elementStream`,
 or buffer the elements obtained from the traversal through `iterator` or `elementList`.
 

 Unless otherwise specified, all member elements of compatible type will be
 presented during the traversal if they exist in this element.  Some member
 elements specify that they may appear at most once in this element; if such
 elements are presented multiple times, the latest occurrence is authentic and
 all previous occurrences should be ignored.
 

 `CompoundElement`s can be constructed by `ClassFileBuilder`s.
 `transform`
 provides an easy way to create a new structure by selectively processing
 the original member structures and directing the results to the builder.

**参数**

- **the** — member element type

**参见**

- ClassFileElement##membership Membership Elements
- ClassFileBuilder

> *Since 24*
