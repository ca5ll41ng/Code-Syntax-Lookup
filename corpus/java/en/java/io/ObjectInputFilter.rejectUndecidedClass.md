---
id: "java-en-function-objectinputfilter-rejectundecidedclass"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputFilter.rejectUndecidedClass"
signature: "static ObjectInputFilter rejectUndecidedClass(ObjectInputFilter filter)"
title: "ObjectInputFilter.rejectUndecidedClass"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputFilter.rejectUndecidedClass

```java
static ObjectInputFilter rejectUndecidedClass(ObjectInputFilter filter)
```

Returns a filter that invokes a given filter and maps `UNDECIDED` to `REJECTED`
 for classes, with some special cases, and otherwise returns the status.
 If the class is not a primitive class and not an array, the status returned is `REJECTED`.
 If the class is a primitive class or an array class additional checks are performed;
 see the list below for details.

 

Object deserialization accepts a class if the filter returns `UNDECIDED`.
 Adding a filter to reject undecided results for classes that have not been
 either allowed or rejected can prevent classes from slipping through the filter.

 The filter returned implements the `checkInput` method
 as follows:
 
     
- Invoke the filter on the `FilterInfo` to get its `status`;
     
- Return the `status` if the status is `REJECTED` or `ALLOWED`;
     
- Return `UNDECIDED` if the `filterInfo.getSerialClass() serialClass`
          is `null`;
     
- Return `REJECTED` if the class is not an `isArray() array`;
     
- Determine the base component type if the `serialClass` is
          an `isArray() array`;
     
- Return `UNDECIDED` if the base component type is
          a `isPrimitive() primitive class`;
     
- Invoke the filter on the `base component type` to get its
          `component status`;
     
- Return `ALLOWED` if the component status is `ALLOWED`;
     
- Otherwise, return `REJECTED`.

**参数**

- **filter** — a filter

**返回**

- an `ObjectInputFilter` that maps an `UNDECIDED` status to `REJECTED` for classes, otherwise returns the filter status

> *Since 17*
