---
id: "java-en-function-linkexception-getlinkresolvedobj"
language: "java"
lang: "en"
category: "function"
name: "LinkException.getLinkResolvedObj"
signature: "public Object getLinkResolvedObj()"
title: "LinkException.getLinkResolvedObj"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkException.getLinkResolvedObj

```java
public Object getLinkResolvedObj()
```

Retrieves the object to which resolution was successful.
 This is the object to which the resolved link name is bound.

**返回**

- The possibly null object that was resolved so far. If null, it means the link resolved object field has not been set.

**参见**

- #getLinkResolvedName
- #setLinkResolvedObj
