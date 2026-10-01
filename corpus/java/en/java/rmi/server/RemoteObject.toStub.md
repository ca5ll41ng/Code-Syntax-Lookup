---
id: "java-en-function-remoteobject-tostub"
language: "java"
lang: "en"
category: "function"
name: "RemoteObject.toStub"
signature: "public static Remote toStub(Remote obj) throws NoSuchObjectException"
title: "RemoteObject.toStub"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteObject.toStub

```java
public static Remote toStub(Remote obj) throws NoSuchObjectException
```

Returns the stub for the remote object obj passed
 as a parameter. This operation is only valid after
 the object has been exported.

**参数**

- **obj** — the remote object whose stub is needed

**返回**

- the stub for the remote object, obj.

**异常**

- **NoSuchObjectException** — if the stub for the remote object could not be found.

> *Since 1.2*
