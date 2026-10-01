---
id: "java-en-function-linkref-getlinkname"
language: "java"
lang: "en"
category: "function"
name: "LinkRef.getLinkName"
signature: "public String getLinkName() throws NamingException"
title: "LinkRef.getLinkName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkRef.getLinkName

```java
public String getLinkName() throws NamingException
```

Retrieves the name of this link.

**返回**

- The non-null name of this link.

**异常**

- **MalformedLinkException** — If a link name could not be extracted
- **NamingException** — If a naming exception was encountered.
