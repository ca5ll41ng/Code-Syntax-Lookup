---
id: "java-en-function-java-lang-reflect-invocationhandler"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.InvocationHandler"
title: "InvocationHandler"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/InvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvocationHandler

`InvocationHandler` is the interface implemented by
 the invocation handler of a proxy instance.

 

Each proxy instance has an associated invocation handler.
 When a method is invoked on a proxy instance, the method
 invocation is encoded and dispatched to the `invoke`
 method of its invocation handler.

**参见**

- Proxy

> *Since 1.3*
