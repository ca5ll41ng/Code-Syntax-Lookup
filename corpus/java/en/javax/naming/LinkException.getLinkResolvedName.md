---
id: "java-en-function-linkexception-getlinkresolvedname"
language: "java"
lang: "en"
category: "function"
name: "LinkException.getLinkResolvedName"
signature: "public Name getLinkResolvedName()"
title: "LinkException.getLinkResolvedName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkException.getLinkResolvedName

```java
public Name getLinkResolvedName()
```

Retrieves the leading portion of the link name that was resolved
 successfully.

**返回**

- The part of the link name that was resolved successfully. It is a composite name. It can be null, which means the link resolved name field has not been set.

**参见**

- #getLinkResolvedObj
- #setLinkResolvedName
