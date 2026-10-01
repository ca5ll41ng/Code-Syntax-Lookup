---
id: "java-en-function-marshalledobject-get"
language: "java"
lang: "en"
category: "function"
name: "MarshalledObject.get"
signature: "public T get() throws IOException, ClassNotFoundException"
title: "MarshalledObject.get"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/MarshalledObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MarshalledObject.get

```java
public T get() throws IOException, ClassNotFoundException
```

Returns a new copy of the contained marshalledobject.  The internal
 representation is deserialized with the semantics used for
 unmarshaling parameters for RMI calls.
 If the MarshalledObject was read from an ObjectInputStream,
 the filter from that stream is used to deserialize the object.

**返回**

- a copy of the contained object

**异常**

- **IOException** — if an IOException occurs while deserializing the object from its internal representation.
- **ClassNotFoundException** — if a ClassNotFoundException occurs while deserializing the object from its internal representation. could not be found

> *Since 1.2*
