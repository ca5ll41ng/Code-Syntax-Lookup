---
id: "java-en-function-filterinfo-serialclass"
language: "java"
lang: "en"
category: "function"
name: "FilterInfo.serialClass"
signature: "Class<?> serialClass()"
title: "FilterInfo.serialClass"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterInfo.serialClass

```java
Class<?> serialClass()
```

The class of an object being deserialized.
 For arrays, it is the array type.
 For example, the array class name of a 2 dimensional array of strings is
 "`[[Ljava.lang.String;`".
 To check the array's element type, iteratively use
 `getComponentType() Class.getComponentType` while the result
 is an array and then check the class.
 The `serialClass is null` in the case where a new object is not being
 created and to give the filter a chance to check the depth, number of
 references to existing objects, and the stream size.

**返回**

- class of an object being deserialized; may be null
