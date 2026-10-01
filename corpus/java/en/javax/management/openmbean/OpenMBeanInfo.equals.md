---
id: "java-en-function-openmbeaninfo-equals"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanInfo.equals"
signature: "public boolean equals(Object obj)"
title: "OpenMBeanInfo.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanInfo.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this `OpenMBeanInfo` instance for equality.
 

 Returns `true` if and only if all of the following statements are true:
 
 
- obj is non null,
 
- obj also implements the `OpenMBeanInfo` interface,
 
- their class names are equal
 
- their infos on attributes, constructors, operations and notifications are equal
 

 This ensures that this `equals` method works properly for obj parameters which are
 different implementations of the `OpenMBeanInfo` interface.

**参数**

- **obj** — the object to be compared for equality with this `OpenMBeanInfo` instance;

**返回**

- `true` if the specified object is equal to this `OpenMBeanInfo` instance.
