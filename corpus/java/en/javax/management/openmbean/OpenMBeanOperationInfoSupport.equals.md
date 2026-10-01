---
id: "java-en-function-openmbeanoperationinfosupport-equals"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanOperationInfoSupport.equals"
signature: "public boolean equals(Object obj)"
title: "OpenMBeanOperationInfoSupport.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfoSupport.equals

```java
public boolean equals(Object obj)
```

Compares the specified `obj` parameter with this
 `OpenMBeanOperationInfoSupport` instance for
 equality.

 

Returns `true` if and only if all of the following
 statements are true:

 
 
- `obj` is non null,
 
- `obj` also implements the `OpenMBeanOperationInfo` interface,
 
- their names are equal
 
- their signatures are equal
 
- their return open types are equal
 
- their impacts are equal
 

 This ensures that this `equals` method works properly for
 `obj` parameters which are different implementations of
 the `OpenMBeanOperationInfo` interface.

**参数**

- **obj** — the object to be compared for equality with this `OpenMBeanOperationInfoSupport` instance;

**返回**

- `true` if the specified object is equal to this `OpenMBeanOperationInfoSupport` instance.
