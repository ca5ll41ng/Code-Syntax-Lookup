---
id: "java-en-function-namingexception-getresolvedobj"
language: "java"
lang: "en"
category: "function"
name: "NamingException.getResolvedObj"
signature: "public Object getResolvedObj()"
title: "NamingException.getResolvedObj"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.getResolvedObj

```java
public Object getResolvedObj()
```

Retrieves the object to which resolution was successful.
 This is the object to which the resolved name is bound.

**返回**

- The possibly null object that was resolved so far. null means that the resolved object field has not been set.

**参见**

- #getResolvedName
- #setResolvedObj
