---
id: "java-en-function-externalizable-readexternal"
language: "java"
lang: "en"
category: "function"
name: "Externalizable.readExternal"
signature: "void readExternal(ObjectInput in) throws IOException, ClassNotFoundException"
title: "Externalizable.readExternal"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Externalizable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Externalizable.readExternal

```java
void readExternal(ObjectInput in) throws IOException, ClassNotFoundException
```

The object implements the readExternal method to restore its
 contents by calling the methods of DataInput for primitive
 types and readObject for objects, strings and arrays.  The
 readExternal method must read the values in the same sequence
 and with the same types as were written by writeExternal.

**参数**

- **in** — the stream to read data from in order to restore the object

**异常**

- **IOException** — if I/O errors occur
- **ClassNotFoundException** — If the class for an object being restored cannot be found.
