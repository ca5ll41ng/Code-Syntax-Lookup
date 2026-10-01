---
id: "java-en-function-marshalledobjectinputstream-readlocation"
language: "java"
lang: "en"
category: "function"
name: "MarshalledObjectInputStream.readLocation"
signature: "protected Object readLocation() throws IOException, ClassNotFoundException"
title: "MarshalledObjectInputStream.readLocation"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/MarshalledObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MarshalledObjectInputStream.readLocation

```java
protected Object readLocation() throws IOException, ClassNotFoundException
```

Overrides MarshalInputStream.readLocation to return locations from
 the stream we were given, or null if we were given a
 null location stream.
