---
id: "java-en-function-remoteref-invoke"
language: "java"
lang: "en"
category: "function"
name: "RemoteRef.invoke"
signature: "Object invoke(Remote obj, java.lang.reflect.Method method, Object[] params, long opnum) throws Exception"
title: "RemoteRef.invoke"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteRef.invoke

```java
Object invoke(Remote obj, java.lang.reflect.Method method, Object[] params, long opnum) throws Exception
```

Invoke a method. This form of delegating method invocation
 to the reference allows the reference to take care of
 setting up the connection to the remote host, marshaling
 some representation for the method and parameters, then
 communicating the method invocation to the remote host.
 This method either returns the result of a method invocation
 on the remote object which resides on the remote host or
 throws a RemoteException if the call failed or an
 application-level exception if the remote invocation throws
 an exception.

**参数**

- **obj** — the object that contains the RemoteRef (e.g., the RemoteStub for the object.
- **method** — the method to be invoked
- **params** — the parameter list
- **opnum** — a hash that may be used to represent the method

**返回**

- result of remote method invocation

**异常**

- **Exception** — if any exception occurs during remote method invocation

> *Since 1.2*
