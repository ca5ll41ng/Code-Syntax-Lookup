---
id: "java-en-function-objectinputstream-readclassdescriptor"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.readClassDescriptor"
signature: "protected ObjectStreamClass readClassDescriptor() throws IOException, ClassNotFoundException"
title: "ObjectInputStream.readClassDescriptor"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.readClassDescriptor

```java
protected ObjectStreamClass readClassDescriptor() throws IOException, ClassNotFoundException
```

Read a class descriptor from the serialization stream.  This method is
 called when the ObjectInputStream expects a class descriptor as the next
 item in the serialization stream.  Subclasses of ObjectInputStream may
 override this method to read in class descriptors that have been written
 in non-standard formats (by subclasses of ObjectOutputStream which have
 overridden the `writeClassDescriptor` method).  By default,
 this method reads class descriptors according to the format defined in
 the Object Serialization specification.

**返回**

- the class descriptor read

**异常**

- **IOException** — If an I/O error has occurred.
- **ClassNotFoundException** — If the Class of a serialized object used in the class descriptor representation cannot be found

**参见**

- java.io.ObjectOutputStream#writeClassDescriptor(java.io.ObjectStreamClass)

> *Since 1.3*
