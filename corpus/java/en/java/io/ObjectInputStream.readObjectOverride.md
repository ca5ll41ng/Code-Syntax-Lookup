---
id: "java-en-function-objectinputstream-readobjectoverride"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.readObjectOverride"
signature: "protected Object readObjectOverride() throws IOException, ClassNotFoundException"
title: "ObjectInputStream.readObjectOverride"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.readObjectOverride

```java
protected Object readObjectOverride() throws IOException, ClassNotFoundException
```

This method is called by trusted subclasses of ObjectInputStream that
 constructed ObjectInputStream using the protected no-arg constructor.
 The subclass is expected to provide an override method with the modifier
 "final".

**返回**

- the Object read from the stream.

**异常**

- **ClassNotFoundException** — Class definition of a serialized object cannot be found.
- **OptionalDataException** — Primitive data was found in the stream instead of objects.
- **IOException** — if I/O errors occurred while reading from the underlying stream

**参见**

- #ObjectInputStream()
- #readObject()

> *Since 1.2*
