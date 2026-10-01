---
id: "java-en-function-remoteobject-hashcode"
language: "java"
lang: "en"
category: "function"
name: "RemoteObject.hashCode"
signature: "public int hashCode()"
title: "RemoteObject.hashCode"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteObject.hashCode

```java
public int hashCode()
```

Returns a hashcode for a remote object.  Two remote object stubs
 that refer to the same remote object will have the same hash code
 (in order to support remote objects as keys in hash tables).

**参见**

- java.util.Hashtable
