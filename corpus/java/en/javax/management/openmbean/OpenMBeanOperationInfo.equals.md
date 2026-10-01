---
id: "java-en-function-openmbeanoperationinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanOperationInfo.equals"
signature: "public boolean equals(Object obj)"
title: "OpenMBeanOperationInfo.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfo.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this `OpenMBeanOperationInfo` instance for equality.
 

 Returns `true` if and only if all of the following statements are true:
 
 
- obj is non null,
 
- obj also implements the `OpenMBeanOperationInfo` interface,
 
- their names are equal
 
- their signatures are equal
 
- their return open types are equal
 
- their impacts are equal
 

 This ensures that this `equals` method works properly for obj parameters which are
 different implementations of the `OpenMBeanOperationInfo` interface.
 
&nbsp;

**参数**

- **obj** — the object to be compared for equality with this `OpenMBeanOperationInfo` instance;

**返回**

- `true` if the specified object is equal to this `OpenMBeanOperationInfo` instance.
