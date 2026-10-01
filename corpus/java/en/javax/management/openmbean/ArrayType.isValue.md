---
id: "java-en-function-arraytype-isvalue"
language: "java"
lang: "en"
category: "function"
name: "ArrayType.isValue"
signature: "public boolean isValue(Object obj)"
title: "ArrayType.isValue"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/ArrayType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayType.isValue

```java
public boolean isValue(Object obj)
```

Tests whether obj is a value for this `ArrayType`
 instance.
 

 This method returns `true` if and only if obj
 is not null, obj is an array and any one of the following
 is `true`:

 
 
- if this `ArrayType` instance describes an array of
 `SimpleType` elements or their corresponding primitive types,
 obj's class name is the same as the className field defined
 for this `ArrayType` instance (i.e. the class name returned
 by the `getClassName() getClassName` method, which
 includes the dimension information),
&nbsp;
 
- if this `ArrayType` instance describes an array of
 classes implementing the `TabularData` interface or the
 `CompositeData` interface, obj is assignable to
 such a declared array, and each element contained in {obj
 is either null or a valid value for the element's open type specified
 by this `ArrayType` instance.

**参数**

- **obj** — the object to be tested.

**返回**

- `true` if obj is a value for this `ArrayType` instance.
