---
id: "java-en-function-objectoutputstream-writeunshared"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.writeUnshared"
signature: "public void writeUnshared(Object obj) throws IOException"
title: "ObjectOutputStream.writeUnshared"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.writeUnshared

```java
public void writeUnshared(Object obj) throws IOException
```

Writes an "unshared" object to the ObjectOutputStream.  This method is
 identical to writeObject, except that it always writes the given object
 as a new, unique object in the stream (as opposed to a back-reference
 pointing to a previously serialized instance).  Specifically:
 
   
- An object written via writeUnshared is always serialized in the
       same manner as a newly appearing object (an object that has not
       been written to the stream yet), regardless of whether or not the
       object has been written previously.

   
- If writeObject is used to write an object that has been previously
       written with writeUnshared, the previous writeUnshared operation
       is treated as if it were a write of a separate object.  In other
       words, ObjectOutputStream will never generate back-references to
       object data written by calls to writeUnshared.
 

 While writing an object via writeUnshared does not in itself guarantee a
 unique reference to the object when it is deserialized, it allows a
 single object to be defined multiple times in a stream, so that multiple
 calls to readUnshared by the receiver will not conflict.  Note that the
 rules described above only apply to the base-level object written with
 writeUnshared, and not to any transitively referenced sub-objects in the
 object graph to be serialized.

**参数**

- **obj** — object to write to stream

**异常**

- **NotSerializableException** — if an object in the graph to be serialized does not implement the Serializable interface
- **InvalidClassException** — if a problem exists with the class of an object to be serialized
- **IOException** — if an I/O error occurs during serialization

> *Since 1.4*
