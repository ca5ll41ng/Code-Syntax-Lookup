---
id: "java-en-function-objectinputstream-setobjectinputfilter"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.setObjectInputFilter"
signature: "public final void setObjectInputFilter(ObjectInputFilter filter)"
title: "ObjectInputStream.setObjectInputFilter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.setObjectInputFilter

```java
public final void setObjectInputFilter(ObjectInputFilter filter)
```

Set the deserialization filter for the stream.

 The deserialization filter is set to the filter returned by invoking the
 `getSerialFilterFactory() JVM-wide filter factory`
 with the `getObjectInputFilter() current filter` and the `filter` parameter.
 The current filter was set in the
 `ObjectInputStream() ObjectInputStream constructors` by invoking the
 `getSerialFilterFactory() JVM-wide filter factory` and may be `null`.
 `setObjectInputFilter` This method} can be called
 once and only once before reading any objects from the stream;
 for example, by calling `readObject` or `readUnshared`.

 

It is not permitted to replace a `non-null` filter with a `null` filter.
 If the `getObjectInputFilter() current filter` is `non-null`,
 the value returned from the filter factory must be `non-null`.

 

The filter's `checkInput checkInput` method is called
 for each class and reference in the stream.
 The filter can check any or all of the class, the array length, the number
 of references, the depth of the graph, and the size of the input stream.
 The depth is the number of nested `readObject readObject`
 calls starting with the reading of the root of the graph being deserialized
 and the current object being deserialized.
 The number of references is the cumulative number of objects and references
 to objects already read from the stream including the current object being read.
 The filter is invoked only when reading objects from the stream and not for
 primitives.
 

 If the filter returns `REJECTED Status.REJECTED`,
 `null` or throws a `RuntimeException`,
 the active `readObject` or `readUnshared`
 throws `InvalidClassException`, otherwise deserialization
 continues uninterrupted.

 The filter, when not `null`, is invoked during `readObject readObject`
 and `readUnshared readUnshared` for each object (regular or class) in the stream.
 Strings are treated as primitives and do not invoke the filter.
 The filter is called for:
 
     
- each object reference previously deserialized from the stream
     (class is `null`, arrayLength is -1),
     
- each regular class (class is not `null`, arrayLength is -1),
     
- each interface class explicitly referenced in the stream
         (it is not called for interfaces implemented by classes in the stream),
     
- each interface of a dynamic proxy and the dynamic proxy class itself
     (class is not `null`, arrayLength is -1),
     
- each array is filtered using the array type and length of the array
     (class is the array type, arrayLength is the requested length),
     
- each object replaced by its class' `readResolve` method
         is filtered using the replacement object's class, if not `null`,
         and if it is an array, the arrayLength, otherwise -1,
     
- and each object replaced by `resolveObject resolveObject`
         is filtered using the replacement object's class, if not `null`,
         and if it is an array, the arrayLength, otherwise -1.
 

 When the `checkInput checkInput` method is invoked
 it is given access to the current class, the array length,
 the current number of references already read from the stream,
 the depth of nested calls to `readObject readObject` or
 `readUnshared readUnshared`,
 and the implementation dependent number of bytes consumed from the input stream.
 

 Each call to `readObject readObject` or
 `readUnshared readUnshared` increases the depth by 1
 before reading an object and decreases by 1 before returning
 normally or exceptionally.
 The depth starts at `1` and increases for each nested object and
 decrements when each nested call returns.
 The count of references in the stream starts at `1` and
 is increased before reading an object.

**参数**

- **filter** — the filter, may be null

**异常**

- **IllegalStateException** — if an object has been read, if the filter factory returns `null` when the `getObjectInputFilter() current filter` is non-null, or if the filter has already been set.

> *Since 9*
