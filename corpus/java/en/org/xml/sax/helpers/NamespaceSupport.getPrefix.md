---
id: "java-en-function-namespacesupport-getprefix"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.getPrefix"
signature: "public String getPrefix (String uri)"
title: "NamespaceSupport.getPrefix"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.getPrefix

```java
public String getPrefix (String uri)
```

Return one of the prefixes mapped to a Namespace URI.

 

If more than one prefix is currently mapped to the same
 URI, this method will make an arbitrary selection; if you
 want all of the prefixes, use the `getPrefixes`
 method instead.

 

**Note:** this will never return the empty (default) prefix;
 to check for a default prefix, use the `getURI getURI`
 method with an argument of "".

**参数**

- **uri** — the namespace URI

**返回**

- one of the prefixes currently mapped to the URI supplied, or null if none is mapped or if the URI is assigned to the default namespace

**参见**

- #getPrefixes(java.lang.String)
- #getURI
