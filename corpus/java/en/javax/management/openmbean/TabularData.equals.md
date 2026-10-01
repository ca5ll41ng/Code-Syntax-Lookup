---
id: "java-en-function-tabulardata-equals"
language: "java"
lang: "en"
category: "function"
name: "TabularData.equals"
signature: "public boolean equals(Object obj)"
title: "TabularData.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this `TabularData` instance for equality.
 

 Returns `true` if and only if all of the following statements are true:
 
 
- obj is non null,
 
- obj also implements the `TabularData` interface,
 
- their row types are equal
 
- their contents (ie index to value mappings) are equal
 

 This ensures that this `equals` method works properly for obj parameters which are
 different implementations of the `TabularData` interface.
 
&nbsp;

**参数**

- **obj** — the object to be compared for equality with this `TabularData` instance;

**返回**

- `true` if the specified object is equal to this `TabularData` instance.
