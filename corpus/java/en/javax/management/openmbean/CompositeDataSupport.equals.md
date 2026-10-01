---
id: "java-en-function-compositedatasupport-equals"
language: "java"
lang: "en"
category: "function"
name: "CompositeDataSupport.equals"
signature: "public boolean equals(Object obj)"
title: "CompositeDataSupport.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeDataSupport.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this
 CompositeDataSupport instance for equality.
 

 Returns `true` if and only if all of the following statements are true:
 
 
- obj is non null,
 
- obj also implements the CompositeData interface,
 
- their composite types are equal
 
- their contents, i.e. (name, value) pairs are equal. If a value contained in
 the content is an array, the value comparison is done as if by calling
 the `deepEquals(Object[], Object[]) deepEquals` method
 for arrays of object reference types or the appropriate overloading of
 `Arrays.equals(e1,e2)` for arrays of primitive types
 

 

 This ensures that this `equals` method works properly for
 obj parameters which are different implementations of the
 CompositeData interface, with the restrictions mentioned in the
 `equals(Object) equals`
 method of the `java.util.Collection` interface.

**参数**

- **obj** — the object to be compared for equality with this CompositeDataSupport instance.

**返回**

- true if the specified object is equal to this CompositeDataSupport instance.
