---
id: "java-en-function-namespacesupport-nsdecl"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.NSDECL"
signature: "public final static String NSDECL = \"http://www.w3.org/xmlns/2000/\""
title: "NamespaceSupport.NSDECL"
directive: "field"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.NSDECL

```java
public final static String NSDECL = "http://www.w3.org/xmlns/2000/"
```

The namespace declaration URI as a constant.
 The value is http://www.w3.org/xmlns/2000/, as defined
 in a backwards-incompatible erratum to the "Namespaces in XML"
 recommendation.  Because that erratum postdated SAX2, SAX2 defaults
 to the original recommendation, and does not normally use this URI.

 

This is the Namespace URI that is optionally applied to
 xmlns and xmlns:* attributes, which are used to
 declare namespaces.

**参见**

- #setNamespaceDeclUris
- #isNamespaceDeclUris

> *Since 1.5, SAX 2.1alpha*
