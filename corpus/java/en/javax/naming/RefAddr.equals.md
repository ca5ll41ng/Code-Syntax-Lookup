---
id: "java-en-function-refaddr-equals"
language: "java"
lang: "en"
category: "function"
name: "RefAddr.equals"
signature: "public boolean equals(Object obj)"
title: "RefAddr.equals"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/RefAddr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RefAddr.equals

```java
public boolean equals(Object obj)
```

Determines whether obj is equal to this RefAddr.

 obj is equal to this RefAddr if all of these conditions are true

-  non-null

-  instance of RefAddr

-  obj has the same address type as this RefAddr (using String.compareTo())

-  both obj and this RefAddr's contents are null or they are equal
         (using the equals() test).

**参数**

- **obj** — possibly null obj to check.

**返回**

- true if obj is equal to this refaddr; false otherwise.

**参见**

- #getContent
- #getType
