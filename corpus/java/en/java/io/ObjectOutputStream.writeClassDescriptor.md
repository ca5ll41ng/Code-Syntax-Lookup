---
id: "java-en-function-objectoutputstream-writeclassdescriptor"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.writeClassDescriptor"
signature: "protected void writeClassDescriptor(ObjectStreamClass desc) throws IOException"
title: "ObjectOutputStream.writeClassDescriptor"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.writeClassDescriptor

```java
protected void writeClassDescriptor(ObjectStreamClass desc) throws IOException
```

Write the specified class descriptor to the ObjectOutputStream.  Class
 descriptors are used to identify the classes of objects written to the
 stream.  Subclasses of ObjectOutputStream may override this method to
 customize the way in which class descriptors are written to the
 serialization stream.  The corresponding method in ObjectInputStream,
 `readClassDescriptor readClassDescriptor`, should then be
 overridden to reconstitute the class descriptor from its custom stream representation.
 By default, this method writes class descriptors according to the format
 defined in the 
 Java Object Serialization Specification.

 

Note that this method will only be called if the ObjectOutputStream
 is not using the old serialization stream format (set by calling
 ObjectOutputStream's `useProtocolVersion` method).  If this
 serialization stream is using the old format
 (`PROTOCOL_VERSION_1`), the class descriptor will be written
 internally in a manner that cannot be overridden or customized.

**参数**

- **desc** — class descriptor to write to the stream

**异常**

- **IOException** — If an I/O error has occurred.

**参见**

- java.io.ObjectInputStream#readClassDescriptor()
- #useProtocolVersion(int)
- java.io.ObjectStreamConstants#PROTOCOL_VERSION_1

> *Since 1.3*
