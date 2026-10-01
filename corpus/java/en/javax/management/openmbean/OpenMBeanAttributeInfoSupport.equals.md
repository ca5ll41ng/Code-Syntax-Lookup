---
id: "java-en-function-openmbeanattributeinfosupport-equals"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanAttributeInfoSupport.equals"
signature: "public boolean equals(Object obj)"
title: "OpenMBeanAttributeInfoSupport.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanAttributeInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanAttributeInfoSupport.equals

```java
public boolean equals(Object obj)
```

Compares the specified `obj` parameter with this `OpenMBeanAttributeInfoSupport` instance for equality.
 

 Returns `true` if and only if all of the following statements are true:
 
 
- `obj` is non null,
 
- `obj` also implements the `OpenMBeanAttributeInfo` interface,
 
- their names are equal
 
- their open types are equal
 
- their access properties (isReadable, isWritable and isIs) are equal
 
- their default, min, max and legal values are equal.
 

 This ensures that this `equals` method works properly for
 `obj` parameters which are different implementations of
 the `OpenMBeanAttributeInfo` interface.

 

If `obj` also implements `DescriptorRead`, then its
 `getDescriptor` method must
 also return the same value as for this object.

**参数**

- **obj** — the object to be compared for equality with this `OpenMBeanAttributeInfoSupport` instance.

**返回**

- `true` if the specified object is equal to this `OpenMBeanAttributeInfoSupport` instance.
