---
id: "java-en-function-marshalledobject-marshalledobject"
language: "java"
lang: "en"
category: "function"
name: "MarshalledObject.MarshalledObject"
signature: "public MarshalledObject(T obj) throws IOException"
title: "MarshalledObject.MarshalledObject"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/MarshalledObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MarshalledObject.MarshalledObject

```java
public MarshalledObject(T obj) throws IOException
```

Creates a new MarshalledObject that contains the
 serialized representation of the current state of the supplied object.
 The object is serialized with the semantics used for marshaling
 parameters for RMI calls.

**参数**

- **obj** — the object to be serialized (must be serializable)

**异常**

- **IOException** — if an IOException occurs; an IOException may occur if obj is not serializable.

> *Since 1.2*
