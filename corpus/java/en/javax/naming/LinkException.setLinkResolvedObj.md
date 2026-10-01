---
id: "java-en-function-linkexception-setlinkresolvedobj"
language: "java"
lang: "en"
category: "function"
name: "LinkException.setLinkResolvedObj"
signature: "public void setLinkResolvedObj(Object obj)"
title: "LinkException.setLinkResolvedObj"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkException.setLinkResolvedObj

```java
public void setLinkResolvedObj(Object obj)
```

Sets the link resolved object field of this exception.
 This indicates the last successfully resolved object of link name.

**参数**

- **obj** — The object to set link resolved object to. This can be null. If null, the link resolved object field is set to null.

**参见**

- #getLinkResolvedObj
