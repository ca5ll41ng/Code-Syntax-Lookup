---
id: "java-en-function-tabulartype-equals"
language: "java"
lang: "en"
category: "function"
name: "TabularType.equals"
signature: "public boolean equals(Object obj)"
title: "TabularType.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularType.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this TabularType instance for equality.
 

 Two TabularType instances are equal if and only if all of the following statements are true:
 
 
- their type names are equal
 
- their row types are equal
 
- they use the same index names, in the same order
 

 
&nbsp;

**参数**

- **obj** — the object to be compared for equality with this TabularType instance; if obj is null, equals returns false.

**返回**

- true if the specified object is equal to this TabularType instance.
