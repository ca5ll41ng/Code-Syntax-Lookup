---
id: "java-en-function-invocationhandler-invoke"
language: "java"
lang: "en"
category: "function"
name: "InvocationHandler.invoke"
signature: "public Object invoke(Object proxy, Method method, Object[] args) throws Throwable"
title: "InvocationHandler.invoke"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/InvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvocationHandler.invoke

```java
public Object invoke(Object proxy, Method method, Object[] args) throws Throwable
```

Processes a method invocation on a proxy instance and returns
 the result.  This method will be invoked on an invocation handler
 when a method is invoked on a proxy instance that it is
 associated with.

**参数**

- **proxy** — the proxy instance that the method was invoked on
- **method** — the `Method` instance corresponding to the method invoked on the proxy instance; the declaring class of the `Method` object may be a proxy interface, one of their superinterfaces, or the `Object` class
- **args** — an array of objects containing the values of the arguments passed in the method invocation on the proxy instance, or `null` if the invoked method takes no arguments. Arguments of primitive types are wrapped in instances of the appropriate primitive wrapper class, such as `java.lang.Integer` or `java.lang.Boolean`.

**返回**

- the value to return from the method invocation on the proxy instance.  If the declared return type of the invoked method is a primitive type, then the value returned by this method must be an instance of the corresponding primitive wrapper class; otherwise, it must be a type assignable to the declared return type.  If the value returned by this method is `null` and the invoked method's return type is primitive, then a `NullPointerException` will be thrown by the method invocation on the proxy instance.  If the value returned by this method is otherwise not compatible with the invoked method's declared return type as described above, a `ClassCastException` will be thrown by the method invocation on the proxy instance.

**异常**

- **Throwable** — the exception to throw from the method invocation on the proxy instance.  The exception's type must be assignable either to any of the exception types declared in the `throws` clause of the invoked method or to the unchecked exception types `java.lang.RuntimeException` or `java.lang.Error`.  If a checked exception is thrown by this method that is not assignable to any of the exception types declared in the `throws` clause of the invoked method, then an `UndeclaredThrowableException` containing the exception that was thrown by this method will be thrown by the method invocation on the proxy instance.

**参见**

- UndeclaredThrowableException
