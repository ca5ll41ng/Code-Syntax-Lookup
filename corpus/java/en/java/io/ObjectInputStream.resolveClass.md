---
id: "java-en-function-objectinputstream-resolveclass"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.resolveClass"
signature: "protected Class<?> resolveClass(ObjectStreamClass desc) throws IOException, ClassNotFoundException"
title: "ObjectInputStream.resolveClass"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.resolveClass

```java
protected Class<?> resolveClass(ObjectStreamClass desc) throws IOException, ClassNotFoundException
```

Load the local class equivalent of the specified stream class
 description.  Subclasses may implement this method to allow classes to
 be fetched from an alternate source.

 

The corresponding method in `ObjectOutputStream` is
 `annotateClass`.  This method will be invoked only once for
 each unique class in the stream.  This method can be implemented by
 subclasses to use an alternate loading mechanism but must return a
 `Class` object. Once returned, if the class is not an array
 class, its serialVersionUID is compared to the serialVersionUID of the
 serialized class, and if there is a mismatch, the deserialization fails
 and an `InvalidClassException` is thrown.

 

The default implementation of this method in
 `ObjectInputStream` returns the result of calling
 {@snippet lang="java":
     Class.forName(desc.getName(), false, loader)
 }
 where `loader` is the first class loader on the current
 thread's stack (starting from the currently executing method) that is
 neither the `getPlatformClassLoader() platform
 class loader` nor its ancestor; otherwise, `loader` is the
 platform class loader. If this call results in a
 `ClassNotFoundException` and the name of the passed
 `ObjectStreamClass` instance is the Java language keyword
 for a primitive type or void, then the `Class` object
 representing that primitive type or void will be returned
 (e.g., an `ObjectStreamClass` with the name
 `"int"` will be resolved to `Integer.TYPE`).
 Otherwise, the `ClassNotFoundException` will be thrown to
 the caller of this method.

**参数**

- **desc** — an instance of class `ObjectStreamClass`

**返回**

- a `Class` object corresponding to `desc`

**异常**

- **IOException** — any of the usual Input/Output exceptions.
- **ClassNotFoundException** — if class of a serialized object cannot be found.
