---
id: "java-en-function-namespacesupport-geturi"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.getURI"
signature: "public String getURI (String prefix)"
title: "NamespaceSupport.getURI"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.getURI

```java
public String getURI (String prefix)
```

Look up a prefix and get the currently-mapped Namespace URI.

 

This method looks up the prefix in the current context.
 Use the empty string ("") for the default Namespace.

**参数**

- **prefix** — The prefix to look up.

**返回**

- The associated Namespace URI, or null if the prefix is undeclared in this context.

**参见**

- #getPrefix
- #getPrefixes
