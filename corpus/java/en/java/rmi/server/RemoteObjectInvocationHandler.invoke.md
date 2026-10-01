---
id: "java-en-function-remoteobjectinvocationhandler-invoke"
language: "java"
lang: "en"
category: "function"
name: "RemoteObjectInvocationHandler.invoke"
signature: "public Object invoke(Object proxy, Method method, Object[] args) throws Throwable"
title: "RemoteObjectInvocationHandler.invoke"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteObjectInvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteObjectInvocationHandler.invoke

```java
public Object invoke(Object proxy, Method method, Object[] args) throws Throwable
```

Processes a method invocation made on the encapsulating
 proxy instance, proxy, and returns the result.

 

RemoteObjectInvocationHandler implements this method
 as follows:

 

If method is one of the following methods, it
 is processed as described below:

 

 
- `hashCode Object.hashCode`: Returns the hash
 code value for the proxy.

 
- `equals Object.equals`: Returns true
 if the argument (args[0]) is an instance of a dynamic
 proxy class and this invocation handler is equal to the invocation
 handler of that argument, and returns false otherwise.

 
- `toString Object.toString`: Returns a string
 representation of the proxy.
 

 

If method overrides `finalize Object.finalize`,
 it is ignored.

 

Otherwise, a remote call is made as follows:

 
 
- If proxy is not an instance of the interface
 `Remote`, then an `IllegalArgumentException` is thrown.

 
- Otherwise, the `invoke invoke` method is invoked
 on this invocation handler's RemoteRef, passing
 proxy, method, args, and the
 method hash (defined in section 8.3 of the "Java Remote Method
 Invocation (RMI) Specification") for method, and the
 result is returned.

 
- If an exception is thrown by RemoteRef.invoke and
 that exception is a checked exception that is not assignable to any
 exception in the throws clause of the method
 implemented by the proxy's class, then that exception
 is wrapped in an `UnexpectedException` and the wrapped
 exception is thrown.  Otherwise, the exception thrown by
 invoke is thrown by this method.
 

 

The semantics of this method are unspecified if the
 arguments could not have been produced by an instance of some
 valid dynamic proxy class containing this invocation handler.

**参数**

- **proxy** — the proxy instance that the method was invoked on
- **method** — the Method instance corresponding to the interface method invoked on the proxy instance
- **args** — an array of objects containing the values of the arguments passed in the method invocation on the proxy instance, or null if the method takes no arguments

**返回**

- the value to return from the method invocation on the proxy instance

**异常**

- **Throwable** — the exception to throw from the method invocation on the proxy instance
