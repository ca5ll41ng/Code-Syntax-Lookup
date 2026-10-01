---
id: "java-en-function-externalizable-writeexternal"
language: "java"
lang: "en"
category: "function"
name: "Externalizable.writeExternal"
signature: "void writeExternal(ObjectOutput out) throws IOException"
title: "Externalizable.writeExternal"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Externalizable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Externalizable.writeExternal

```java
void writeExternal(ObjectOutput out) throws IOException
```

The object implements the writeExternal method to save its contents
 by calling the methods of DataOutput for its primitive values or
 calling the writeObject method of ObjectOutput for objects, strings,
 and arrays.

             the data layout of this Externalizable object.
             List the sequence of element types and, if possible,
             relate the element to a public/protected field and/or
             method of this Externalizable class.

**参数**

- **out** — the stream to write the object to

**异常**

- **IOException** — Includes any I/O exceptions that may occur
