---
id: "java-en-function-marshalledobject-equals"
language: "java"
lang: "en"
category: "function"
name: "MarshalledObject.equals"
signature: "public boolean equals(Object obj)"
title: "MarshalledObject.equals"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/MarshalledObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MarshalledObject.equals

```java
public boolean equals(Object obj)
```

Compares this MarshalledObject to another object.
 Returns true if and only if the argument refers to a
 MarshalledObject that contains exactly the same
 serialized representation of an object as this one does. The
 comparison ignores any class codebase annotation, meaning that
 two objects are equivalent if they have the same serialized
 representation except for the codebase of each class
 in the serialized representation.

**参数**

- **obj** — the object to compare with this MarshalledObject

**返回**

- true if the argument contains an equivalent serialized object; false otherwise

> *Since 1.2*
