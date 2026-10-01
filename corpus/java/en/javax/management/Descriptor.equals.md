---
id: "java-en-function-descriptor-equals"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.equals"
signature: "public boolean equals(Object obj)"
title: "Descriptor.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.equals

```java
public boolean equals(Object obj)
```

Compares this descriptor to the given object.  The objects are equal if
 the given object is also a Descriptor, and if the two Descriptors have
 the same field names (possibly differing in case) and the same
 associated values.  The respective values for a field in the two
 Descriptors are equal if the following conditions hold:

 
 
- If one value is null then the other must be too.
 
- If one value is a primitive array then the other must be a primitive
 array of the same type with the same elements.
 
- If one value is an object array then the other must be too and
 `deepEquals` must return true.
 
- Otherwise `equals` must return true.

**参数**

- **obj** — the object to compare with.

**返回**

- `true` if the objects are the same; `false` otherwise.

> *Since 1.6*
