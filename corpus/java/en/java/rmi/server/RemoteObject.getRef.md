---
id: "java-en-function-remoteobject-getref"
language: "java"
lang: "en"
category: "function"
name: "RemoteObject.getRef"
signature: "public RemoteRef getRef()"
title: "RemoteObject.getRef"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteObject.getRef

```java
public RemoteRef getRef()
```

Returns the remote reference for the remote object.

 

Note: The object returned from this method may be an instance of
 an implementation-specific class.  The RemoteObject
 class ensures serialization portability of its instances' remote
 references through the behavior of its custom
 writeObject and readObject methods.  An
 instance of RemoteRef should not be serialized outside
 of its RemoteObject wrapper instance or the result may
 be unportable.

**返回**

- remote reference for the remote object

> *Since 1.2*
