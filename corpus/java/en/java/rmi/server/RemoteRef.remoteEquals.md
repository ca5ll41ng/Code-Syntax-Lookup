---
id: "java-en-function-remoteref-remoteequals"
language: "java"
lang: "en"
category: "function"
name: "RemoteRef.remoteEquals"
signature: "boolean remoteEquals(RemoteRef obj)"
title: "RemoteRef.remoteEquals"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteRef.remoteEquals

```java
boolean remoteEquals(RemoteRef obj)
```

Compares two remote objects for equality.
 Returns a boolean that indicates whether this remote object is
 equivalent to the specified Object. This method is used when a
 remote object is stored in a hashtable.

**参数**

- **obj** — the Object to compare with

**返回**

- true if these Objects are equal; false otherwise.

**参见**

- java.util.Hashtable

> *Since 1.1*
