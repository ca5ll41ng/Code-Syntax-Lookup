---
id: "java-en-function-remoteref-getrefclass"
language: "java"
lang: "en"
category: "function"
name: "RemoteRef.getRefClass"
signature: "String getRefClass(java.io.ObjectOutput out)"
title: "RemoteRef.getRefClass"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteRef.getRefClass

```java
String getRefClass(java.io.ObjectOutput out)
```

Returns the class name of the ref type to be serialized onto
 the stream 'out'.

**参数**

- **out** — the output stream to which the reference will be serialized

**返回**

- the class name (without package qualification) of the reference type

> *Since 1.1*
