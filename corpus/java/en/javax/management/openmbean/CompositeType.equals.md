---
id: "java-en-function-compositetype-equals"
language: "java"
lang: "en"
category: "function"
name: "CompositeType.equals"
signature: "public boolean equals(Object obj)"
title: "CompositeType.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeType.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this CompositeType instance for equality.
 

 Two CompositeType instances are equal if and only if all of the following statements are true:
 
 
- their type names are equal
 
- their items' names and types are equal

**参数**

- **obj** — the object to be compared for equality with this CompositeType instance; if obj is null, equals returns false.

**返回**

- true if the specified object is equal to this CompositeType instance.
