---
id: "java-en-function-namespacesupport-getprefixes"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.getPrefixes"
signature: "public Enumeration<String> getPrefixes ()"
title: "NamespaceSupport.getPrefixes"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.getPrefixes

```java
public Enumeration<String> getPrefixes ()
```

Return an enumeration of all prefixes whose declarations are
 active in the current context.
 This includes declarations from parent contexts that have
 not been overridden.

 

**Note:** if there is a default prefix, it will not be
 returned in this enumeration; check for the default prefix
 using the `getURI getURI` with an argument of "".

**返回**

- An enumeration of prefixes (never empty).

**参见**

- #getDeclaredPrefixes
- #getURI
