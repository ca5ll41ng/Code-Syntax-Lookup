---
id: "java-en-function-namespacesupport-getdeclaredprefixes"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.getDeclaredPrefixes"
signature: "public Enumeration<String> getDeclaredPrefixes ()"
title: "NamespaceSupport.getDeclaredPrefixes"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.getDeclaredPrefixes

```java
public Enumeration<String> getDeclaredPrefixes ()
```

Return an enumeration of all prefixes declared in this context.

 

The empty (default) prefix will be included in this
 enumeration; note that this behaviour differs from that of
 `getPrefix` and `getPrefixes`.

**返回**

- An enumeration of all prefixes declared in this context.

**参见**

- #getPrefixes
- #getURI
