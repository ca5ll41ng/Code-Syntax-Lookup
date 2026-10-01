---
id: "java-en-function-linkexception-getlinkremainingname"
language: "java"
lang: "en"
category: "function"
name: "LinkException.getLinkRemainingName"
signature: "public Name getLinkRemainingName()"
title: "LinkException.getLinkRemainingName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkException.getLinkRemainingName

```java
public Name getLinkRemainingName()
```

Retrieves the remaining unresolved portion of the link name.

**返回**

- The part of the link name that has not been resolved. It is a composite name. It can be null, which means the link remaining name field has not been set.

**参见**

- #setLinkRemainingName
