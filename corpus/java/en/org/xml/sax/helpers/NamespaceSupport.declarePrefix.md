---
id: "java-en-function-namespacesupport-declareprefix"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.declarePrefix"
signature: "public boolean declarePrefix (String prefix, String uri)"
title: "NamespaceSupport.declarePrefix"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.declarePrefix

```java
public boolean declarePrefix (String prefix, String uri)
```

Declare a Namespace prefix.  All prefixes must be declared
 before they are referenced.  For example, a SAX driver (parser)
 would scan an element's attributes
 in two passes:  first for namespace declarations,
 then a second pass using `processName processName` to
 interpret prefixes against (potentially redefined) prefixes.

 

This method declares a prefix in the current Namespace
 context; the prefix will remain in force until this context
 is popped, unless it is shadowed in a descendant context.

 

To declare the default element Namespace, use the empty string as
 the prefix.

 

Note that there is an asymmetry in this library: `getPrefix getPrefix` will not return the "" prefix,
 even if you have declared a default element namespace.
 To check for a default namespace,
 you have to look it up explicitly using `getURI getURI`.
 This asymmetry exists to make it easier to look up prefixes
 for attribute names, where the default prefix is not allowed.

**参数**

- **prefix** — The prefix to declare, or the empty string to indicate the default element namespace.  This may never have the value "xml" or "xmlns".
- **uri** — The Namespace URI to associate with the prefix.

**返回**

- true if the prefix was legal, false otherwise

**参见**

- #processName
- #getURI
- #getPrefix
