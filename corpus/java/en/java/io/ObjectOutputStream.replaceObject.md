---
id: "java-en-function-objectoutputstream-replaceobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.replaceObject"
signature: "protected Object replaceObject(Object obj) throws IOException"
title: "ObjectOutputStream.replaceObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.replaceObject

```java
protected Object replaceObject(Object obj) throws IOException
```

This method will allow trusted subclasses of ObjectOutputStream to
 substitute one object for another during serialization. Replacing
 objects is disabled until enableReplaceObject is called. The
 enableReplaceObject method checks that the stream requesting to do
 replacement can be trusted.  The first occurrence of each object written
 into the serialization stream is passed to replaceObject.  Subsequent
 references to the object are replaced by the object returned by the
 original call to replaceObject.  To ensure that the private state of
 objects is not unintentionally exposed, only trusted streams may use
 replaceObject.

 

The ObjectOutputStream.writeObject method takes a parameter of type
 Object (as opposed to type Serializable) to allow for cases where
 non-serializable objects are replaced by serializable ones.

 

When a subclass is replacing objects it must ensure that either a
 complementary substitution must be made during deserialization or that
 the substituted object is compatible with every field where the
 reference will be stored.  Objects whose type is not a subclass of the
 type of the field or array element abort the serialization by raising an
 exception and the object is not be stored.

 

This method is called only once when each object is first
 encountered.  All subsequent references to the object will be redirected
 to the new object. This method should return the object to be
 substituted or the original object.

 

Null can be returned as the object to be substituted, but may cause
 `NullPointerException` in classes that contain references to the
 original object since they may be expecting an object instead of
 null.

**参数**

- **obj** — the object to be replaced

**返回**

- the alternate object that replaced the specified one

**异常**

- **IOException** — Any exception thrown by the underlying OutputStream.
