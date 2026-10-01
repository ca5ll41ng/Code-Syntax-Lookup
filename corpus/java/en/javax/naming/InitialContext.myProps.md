---
id: "java-en-function-initialcontext-myprops"
language: "java"
lang: "en"
category: "function"
name: "InitialContext.myProps"
signature: "protected Hashtable<Object,Object> myProps = null"
title: "InitialContext.myProps"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InitialContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContext.myProps

```java
protected Hashtable<Object,Object> myProps = null
```

The environment associated with this InitialContext.
 It is initialized to null and is updated by the constructor
 that accepts an environment or by the `init()` method.

**参见**

- #addToEnvironment
- #removeFromEnvironment
- #getEnvironment
