---
id: "java-en-function-openmbeanparameterinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanParameterInfo.equals"
signature: "public boolean equals(Object obj)"
title: "OpenMBeanParameterInfo.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanParameterInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanParameterInfo.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this `OpenMBeanParameterInfo` instance for equality.
 

 Returns `true` if and only if all of the following statements are true:
 
 
- obj is non null,
 
- obj also implements the `OpenMBeanParameterInfo` interface,
 
- their names are equal
 
- their open types are equal
 
- their default, min, max and legal values are equal.
 

 This ensures that this `equals` method works properly for obj parameters which are
 different implementations of the `OpenMBeanParameterInfo` interface.
 
&nbsp;

**参数**

- **obj** — the object to be compared for equality with this `OpenMBeanParameterInfo` instance;

**返回**

- `true` if the specified object is equal to this `OpenMBeanParameterInfo` instance.
