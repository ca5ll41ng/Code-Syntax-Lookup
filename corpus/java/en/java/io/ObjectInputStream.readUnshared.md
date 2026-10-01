---
id: "java-en-function-objectinputstream-readunshared"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.readUnshared"
signature: "public Object readUnshared() throws IOException, ClassNotFoundException"
title: "ObjectInputStream.readUnshared"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.readUnshared

```java
public Object readUnshared() throws IOException, ClassNotFoundException
```

Reads an "unshared" object from the ObjectInputStream.  This method is
 identical to readObject, except that it prevents subsequent calls to
 readObject and readUnshared from returning additional references to the
 deserialized instance obtained via this call.  Specifically:
 
   
- If readUnshared is called to deserialize a back-reference (the
       stream representation of an object which has been written
       previously to the stream), an ObjectStreamException will be
       thrown.

   
- If readUnshared returns successfully, then any subsequent attempts
       to deserialize back-references to the stream handle deserialized
       by readUnshared will cause an ObjectStreamException to be thrown.
 

 Deserializing an object via readUnshared invalidates the stream handle
 associated with the returned object.  Note that this in itself does not
 always guarantee that the reference returned by readUnshared is unique;
 the deserialized object may define a readResolve method which returns an
 object visible to other parties, or readUnshared may return a Class
 object or enum constant obtainable elsewhere in the stream or through
 external means. If the deserialized object defines a readResolve method
 and the invocation of that method returns an array, then readUnshared
 returns a shallow clone of that array; this guarantees that the returned
 array object is unique and cannot be obtained a second time from an
 invocation of readObject or readUnshared on the ObjectInputStream,
 even if the underlying data stream has been manipulated.

 

The deserialization filter, when not `null`, is invoked for
 each object (regular or class) read to reconstruct the root object.
 See `setObjectInputFilter(ObjectInputFilter) setObjectInputFilter` for details.

**返回**

- reference to deserialized object

**异常**

- **ClassNotFoundException** — if class of an object to deserialize cannot be found
- **StreamCorruptedException** — if control information in the stream is inconsistent
- **ObjectStreamException** — if object to deserialize has already appeared in stream
- **OptionalDataException** — if primitive data is next in stream
- **IOException** — if an I/O error occurs during deserialization

> *Since 1.4*
