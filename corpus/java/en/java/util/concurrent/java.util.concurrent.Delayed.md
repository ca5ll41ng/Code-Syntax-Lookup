---
id: "java-en-function-java-util-concurrent-delayed"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.Delayed"
title: "Delayed"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Delayed.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Delayed

A mix-in style interface for marking objects that should be
 acted upon after a given delay.

 

An implementation of this interface must define a
 `compareTo` method that provides an ordering consistent with
 its `getDelay` method.

> *Since 1.5*
