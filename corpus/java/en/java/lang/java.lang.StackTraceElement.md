---
id: "java-en-function-java-lang-stacktraceelement"
language: "java"
lang: "en"
category: "function"
name: "java.lang.StackTraceElement"
title: "StackTraceElement"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement

An element in a stack trace, as returned by `getStackTrace`.  Each element represents a single stack frame.
 All stack frames except for the one at the top of the stack represent
 a method invocation.  The frame at the top of the stack represents the
 execution point at which the stack trace was generated.  Typically,
 this is the point at which the throwable corresponding to the stack trace
 was created.

> *Since 1.4*
