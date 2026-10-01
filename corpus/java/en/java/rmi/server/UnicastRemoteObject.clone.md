---
id: "java-en-function-unicastremoteobject-clone"
language: "java"
lang: "en"
category: "function"
name: "UnicastRemoteObject.clone"
signature: "public Object clone() throws CloneNotSupportedException"
title: "UnicastRemoteObject.clone"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/UnicastRemoteObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnicastRemoteObject.clone

```java
public Object clone() throws CloneNotSupportedException
```

Returns a clone of the remote object that is distinct from
 the original.

**返回**

- the new remote object

**异常**

- **CloneNotSupportedException** — if clone failed due to a RemoteException.

> *Since 1.1*
