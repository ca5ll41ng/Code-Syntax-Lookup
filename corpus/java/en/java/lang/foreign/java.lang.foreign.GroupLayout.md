---
id: "java-en-function-java-lang-foreign-grouplayout"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.GroupLayout"
title: "GroupLayout"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/GroupLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GroupLayout

A compound layout that is an aggregation of multiple, heterogeneous
 member layouts. There are two ways in which member layouts can be combined:
 if member layouts are laid out one after the other, the resulting group layout is a
 `StructLayout struct layout`; conversely, if all member layouts are laid
 out at the same starting offset, the resulting group layout is a
 `UnionLayout union layout`.

 This class is immutable, thread-safe and
 value-based.

> *Since 22*
