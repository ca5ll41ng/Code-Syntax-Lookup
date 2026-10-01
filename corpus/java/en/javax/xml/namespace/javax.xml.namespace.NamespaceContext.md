---
id: "java-en-function-javax-xml-namespace-namespacecontext"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.namespace.NamespaceContext"
title: "NamespaceContext"
directive: "type"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/NamespaceContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceContext

Interface for read only XML Namespace context processing.

 

An XML Namespace has the properties:
 
   
- Namespace URI:
       Namespace name expressed as a URI to which the prefix is bound
   
- prefix: syntactically, this is the part of the attribute name
       following the `XMLConstants.XMLNS_ATTRIBUTE`
       ("xmlns") in the Namespace declaration
 

 

example:
 ``

 

All `get*(*)` methods operate in the current scope
 for Namespace URI and prefix resolution.

 

Note that a Namespace URI can be bound to
 **multiple** prefixes in the current scope.  This can
 occur when multiple `XMLConstants.XMLNS_ATTRIBUTE`
 ("xmlns") Namespace declarations occur in the same Start-Tag and
 refer to the same Namespace URI. e.g.

 
```
 ` `
 
```

 This can also occur when the same Namespace URI is used in multiple
 `XMLConstants.XMLNS_ATTRIBUTE` ("xmlns") Namespace
 declarations in the logical parent element hierarchy.  e.g.

 
```
 `
   
     ...
   
  `
 
```

 

A prefix can only be bound to a **single**
 Namespace URI in the current scope.

**参见**

- javax.xml.XMLConstants javax.xml.XMLConstants for declarations of common XML values
- XML Schema Part2: Datatypes
- Namespaces in XML

> *Since 1.5*
