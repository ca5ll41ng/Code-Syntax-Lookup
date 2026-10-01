---
id: "java-en-function-java-lang-stackwalker"
language: "java"
lang: "en"
category: "function"
name: "java.lang.StackWalker"
title: "StackWalker"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackWalker

A stack walker.

 

 The `walk walk` method opens a sequential stream
 of `StackFrame StackFrame`s for the current thread and then applies
 the given function to walk the `StackFrame` stream.
 The stream reports stack frame elements in order, from the top most frame
 that represents the execution point at which the stack was generated to
 the bottom most frame.
 The `StackFrame` stream is closed when the `walk` method returns.
 If an attempt is made to reuse the closed stream,
 `IllegalStateException` will be thrown.

 

 `Option Stack walker options` configure the stack frame
 information obtained by a `StackWalker`.
 By default, the class name and method information are collected but
 not the `getDeclaringClass() Class reference`.
 The method information can be dropped via the `DROP_METHOD_INFO
 DROP_METHOD_INFO` option. The `Class` object can be retained for
 access via the `RETAIN_CLASS_REFERENCE RETAIN_CLASS_REFERENCE` option.
 Stack frames of the reflection API and implementation classes are
 `SHOW_HIDDEN_FRAMES hidden` by default.

 

 `StackWalker` is thread-safe. Multiple threads can share
 a single `StackWalker` object to traverse its own stack.

 Examples

 

1. To find the first caller filtering out a known list of implementation class:
 {@snippet lang="java" :
     StackWalker walker = StackWalker.getInstance(Set.of(Option.DROP_METHOD_INFO, Option.RETAIN_CLASS_REFERENCE));
     Optional> callerClass = walker.walk(s ->
             s.map(StackFrame::getDeclaringClass)
              .filter(Predicate.not(implClasses::contains))
              .findFirst());
 }

 

2. To snapshot the top 10 stack frames of the current thread,
 {@snippet lang="java" :
     List stack = StackWalker.getInstance().walk(s -> s.limit(10).toList());
 }

 Unless otherwise noted, passing a `null` argument to a
 constructor or method in this `StackWalker` class
 will cause a `NullPointerException NullPointerException`
 to be thrown.

> *Since 9*
