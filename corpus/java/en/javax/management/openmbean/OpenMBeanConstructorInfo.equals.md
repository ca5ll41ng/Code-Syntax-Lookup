---
id: "java-en-function-openmbeanconstructorinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanConstructorInfo.equals"
signature: "public boolean equals(Object obj)"
title: "OpenMBeanConstructorInfo.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanConstructorInfo.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this `OpenMBeanConstructorInfo` instance for equality.
 

 Returns `true` if and only if all of the following statements are true:
 
 
- obj is non null,
 
- obj also implements the `OpenMBeanConstructorInfo` interface,
 
- their names are equal
 
- their signatures are equal.
 

 This ensures that this `equals` method works properly for obj parameters which are
 different implementations of the `OpenMBeanConstructorInfo` interface.
 
&nbsp;

**参数**

- **obj** — the object to be compared for equality with this `OpenMBeanConstructorInfo` instance;

**返回**

- `true` if the specified object is equal to this `OpenMBeanConstructorInfo` instance.
