---
id: "java-en-function-namingexception-getresolvedname"
language: "java"
lang: "en"
category: "function"
name: "NamingException.getResolvedName"
signature: "public Name getResolvedName()"
title: "NamingException.getResolvedName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.getResolvedName

```java
public Name getResolvedName()
```

Retrieves the leading portion of the name that was resolved
 successfully.

**返回**

- The part of the name that was resolved successfully. It is a composite name. It can be null, which means the resolved name field has not been set.

**参见**

- #getResolvedObj
- #setResolvedName
