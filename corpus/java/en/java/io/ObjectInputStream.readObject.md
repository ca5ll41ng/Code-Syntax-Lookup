---
id: "java-en-function-objectinputstream-readobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.readObject"
signature: "public final Object readObject() throws IOException, ClassNotFoundException"
title: "ObjectInputStream.readObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.readObject

```java
public final Object readObject() throws IOException, ClassNotFoundException
```

Read an object from the ObjectInputStream.  The class of the object, the
 signature of the class, and the values of the non-transient and
 non-static fields of the class and all of its supertypes are read.
 Default deserializing for a class can be overridden using the writeObject
 and readObject methods.  Objects referenced by this object are read
 transitively so that a complete equivalent graph of objects is
 reconstructed by readObject.

 

The root object is completely restored when all of its fields and the
 objects it references are completely restored.  At this point the object
 validation callbacks are executed in order based on their registered
 priorities. The callbacks are registered by objects (in the readObject
 special methods) as they are individually restored.

 

The deserialization filter, when not `null`, is invoked for
 each object (regular or class) read to reconstruct the root object.
 See `setObjectInputFilter(ObjectInputFilter) setObjectInputFilter` for details.

 

Exceptions are thrown for problems with the InputStream and for
 classes that should not be deserialized.  All exceptions are fatal to
 the InputStream and leave it in an indeterminate state; it is up to the
 caller to ignore or recover the stream state.

 
      
          

An object in the stream that instantiates a concrete
          `isValue value class`, or that extends a
          Serializable abstract value class that declares instance fields,
          can only be deserialized if it is a record or a boxed primitive
          value. Otherwise, `readObject` throws an
          `InvalidClassException`.

**异常**

- **ClassNotFoundException** — Class of a serialized object cannot be found.
- **InvalidClassException** — Something is wrong with a class used by deserialization.
- **StreamCorruptedException** — Control information in the stream is inconsistent.
- **OptionalDataException** — Primitive data was found in the stream instead of objects.
- **IOException** — Any of the usual Input/Output related exceptions.
