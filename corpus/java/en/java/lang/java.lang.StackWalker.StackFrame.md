---
id: "java-en-function-java-lang-stackwalker-stackframe"
language: "java"
lang: "en"
category: "function"
name: "java.lang.StackWalker.StackFrame"
title: "StackFrame"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame

A `StackFrame` object represents a method invocation returned by
 `StackWalker`.

 

 `Option Stack walker options` configure the stack
 frame information obtained by a `StackWalker`.
 If the stack walker is configured with `DROP_METHOD_INFO
 DROP_METHOD_INFO` option, method information such as
 the `getMethodName() method name`,
 the `getLineNumber() line number`,
 the `getByteCodeIndex() bytecode index`, etc
 will be dropped.
 If the stack walker is configured with `RETAIN_CLASS_REFERENCE
 RETAIN_CLASS_REFERENCE` option, the `getDeclaringClass() Class` object
 will be retained for access.

> *Since 9*
