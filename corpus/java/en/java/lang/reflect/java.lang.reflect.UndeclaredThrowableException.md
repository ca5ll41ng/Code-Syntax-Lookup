---
id: "java-en-function-java-lang-reflect-undeclaredthrowableexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.UndeclaredThrowableException"
title: "UndeclaredThrowableException"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/UndeclaredThrowableException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UndeclaredThrowableException

Thrown by a method invocation on a proxy instance if its invocation
 handler's `invoke invoke` method throws a
 checked exception (a `Throwable` that is not assignable
 to `RuntimeException` or `Error`) that
 is not assignable to any of the exception types declared in the
 `throws` clause of the method that was invoked on the
 proxy instance and dispatched to the invocation handler.

 

An `UndeclaredThrowableException` instance contains
 the undeclared checked exception that was thrown by the invocation
 handler, and it can be retrieved with the
 `getUndeclaredThrowable()` method.
 `UndeclaredThrowableException` extends
 `RuntimeException`, so it is an unchecked exception
 that wraps a checked exception.

**参见**

- InvocationHandler

> *Since 1.3*
