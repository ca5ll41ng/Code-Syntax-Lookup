---
id: "java-en-function-remoteref-remotehashcode"
language: "java"
lang: "en"
category: "function"
name: "RemoteRef.remoteHashCode"
signature: "int remoteHashCode()"
title: "RemoteRef.remoteHashCode"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteRef.remoteHashCode

```java
int remoteHashCode()
```

Returns a hashcode for a remote object.  Two remote object stubs
 that refer to the same remote object will have the same hash code
 (in order to support remote objects as keys in hash tables).

**返回**

- remote object hashcode

**参见**

- java.util.Hashtable

> *Since 1.1*
