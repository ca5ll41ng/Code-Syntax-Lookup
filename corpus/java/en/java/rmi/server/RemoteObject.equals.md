---
id: "java-en-function-remoteobject-equals"
language: "java"
lang: "en"
category: "function"
name: "RemoteObject.equals"
signature: "public boolean equals(Object obj)"
title: "RemoteObject.equals"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteObject.equals

```java
public boolean equals(Object obj)
```

Compares two remote objects for equality.
 Returns a boolean that indicates whether this remote object is
 equivalent to the specified Object. This method is used when a
 remote object is stored in a hashtable.
 If the specified Object is not itself an instance of RemoteObject,
 then this method delegates by returning the result of invoking the
 equals method of its parameter with this remote object
 as the argument.

**参数**

- **obj** — the Object to compare with

**返回**

- true if these Objects are equal; false otherwise.

**参见**

- java.util.Hashtable
