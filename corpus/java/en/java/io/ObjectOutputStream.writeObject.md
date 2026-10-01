---
id: "java-en-function-objectoutputstream-writeobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.writeObject"
signature: "public final void writeObject(Object obj) throws IOException"
title: "ObjectOutputStream.writeObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.writeObject

```java
public final void writeObject(Object obj) throws IOException
```

Write the specified object to the ObjectOutputStream.  The class of the
 object, the signature of the class, and the values of the non-transient
 and non-static fields of the class and all of its supertypes are
 written.  Default serialization for a class can be overridden using the
 writeObject and the readObject methods.  Objects referenced by this
 object are written transitively so that a complete equivalent graph of
 objects can be reconstructed by an ObjectInputStream.

 

Exceptions are thrown for problems with the OutputStream and for
 classes that should not be serialized.  All exceptions are fatal to the
 OutputStream, which is left in an indeterminate state, and it is up to
 the caller to ignore or recover the stream state.

 
      
          

An object that instantiates a concrete
          `isValue value class`, or that extends a
          Serializable abstract value class that declares instance fields,
          can only be serialized if it is a record, or it implements
          `writeReplace`, or it is a boxed primitive value.
          Otherwise, `writeObject` throws an
          `InvalidClassException`.

**异常**

- **InvalidClassException** — Something is wrong with a class used by serialization.
- **NotSerializableException** — Some object to be serialized does not implement the java.io.Serializable interface.
- **IOException** — Any exception thrown by the underlying OutputStream.
