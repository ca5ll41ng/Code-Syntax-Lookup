---
id: "java-en-function-openmbeanattributeinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanAttributeInfo.equals"
signature: "public boolean equals(Object obj)"
title: "OpenMBeanAttributeInfo.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanAttributeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanAttributeInfo.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this
 `OpenMBeanAttributeInfo` instance for equality.
 

 Returns `true` if and only if all of the following statements are true:
 
 
- obj is non null,
 
- obj also implements the `OpenMBeanAttributeInfo` interface,
 
- their names are equal
 
- their open types are equal
 
- their access properties (isReadable, isWritable and isIs) are equal
 
- their default, min, max and legal values are equal.
 

 This ensures that this `equals` method works properly for obj parameters which are
 different implementations of the `OpenMBeanAttributeInfo` interface.
 
&nbsp;

**参数**

- **obj** — the object to be compared for equality with this `OpenMBeanAttributeInfo` instance;

**返回**

- `true` if the specified object is equal to this `OpenMBeanAttributeInfo` instance.
