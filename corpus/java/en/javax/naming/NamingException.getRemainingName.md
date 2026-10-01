---
id: "java-en-function-namingexception-getremainingname"
language: "java"
lang: "en"
category: "function"
name: "NamingException.getRemainingName"
signature: "public Name getRemainingName()"
title: "NamingException.getRemainingName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.getRemainingName

```java
public Name getRemainingName()
```

Retrieves the remaining unresolved portion of the name.

**返回**

- The part of the name that has not been resolved. It is a composite name. It can be null, which means the remaining name field has not been set.

**参见**

- #setRemainingName
- #appendRemainingName
- #appendRemainingComponent
