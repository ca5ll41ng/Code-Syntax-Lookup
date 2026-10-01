---
id: "java-en-function-java-util-concurrent-atomic-atomicmarkablereference"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.atomic.AtomicMarkableReference"
title: "AtomicMarkableReference"
directive: "type"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicMarkableReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicMarkableReference

An `AtomicMarkableReference` maintains an object reference
 along with a mark bit, that can be updated atomically.

 

Implementation note: This implementation maintains markable
 references by creating internal objects representing "boxed"
 [reference, boolean] pairs.

**参数**

- **The** — type of object referred to by this reference

> *Since 1.5*
