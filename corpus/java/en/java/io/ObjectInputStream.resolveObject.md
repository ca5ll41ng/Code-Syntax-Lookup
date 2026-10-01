---
id: "java-en-function-objectinputstream-resolveobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.resolveObject"
signature: "protected Object resolveObject(Object obj) throws IOException"
title: "ObjectInputStream.resolveObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.resolveObject

```java
protected Object resolveObject(Object obj) throws IOException
```

This method will allow trusted subclasses of ObjectInputStream to
 substitute one object for another during deserialization. Replacing
 objects is disabled until enableResolveObject is called. The
 enableResolveObject method checks that the stream requesting to resolve
 object can be trusted. Every reference to serializable objects is passed
 to resolveObject.  To ensure that the private state of objects is not
 unintentionally exposed only trusted streams may use resolveObject.

 

This method is called after an object has been read but before it is
 returned from readObject.  The default resolveObject method just returns
 the same object.

 

When a subclass is replacing objects it must ensure that the
 substituted object is compatible with every field where the reference
 will be stored.  Objects whose type is not a subclass of the type of the
 field or array element abort the deserialization by raising an exception
 and the object is not be stored.

 

This method is called only once when each object is first
 encountered.  All subsequent references to the object will be redirected
 to the new object.

**参数**

- **obj** — object to be substituted

**返回**

- the substituted object

**异常**

- **IOException** — Any of the usual Input/Output exceptions.
