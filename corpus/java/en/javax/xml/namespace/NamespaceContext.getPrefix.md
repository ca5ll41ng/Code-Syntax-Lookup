---
id: "java-en-function-namespacecontext-getprefix"
language: "java"
lang: "en"
category: "function"
name: "NamespaceContext.getPrefix"
signature: "String getPrefix(String namespaceURI)"
title: "NamespaceContext.getPrefix"
directive: "method"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/NamespaceContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceContext.getPrefix

```java
String getPrefix(String namespaceURI)
```

Get prefix bound to Namespace URI in the current scope.

 

To get all prefixes bound to a Namespace URI in the current
 scope, use `getPrefixes`.

 

When requesting a prefix by Namespace URI, the following
 table describes the returned prefix value for all Namespace URI
 values:

 
 Return value for specified Namespace URIs
   
     
       Namespace URI parameter
       prefix value returned
     
   
   
     
       ``
       `XMLConstants.DEFAULT_NS_PREFIX` ("")
       
     
     
       bound Namespace URI
       prefix bound to Namespace URI in the current scope,
           if multiple prefixes are bound to the Namespace URI in
           the current scope, a single arbitrary prefix, whose
           choice is implementation dependent, is returned
     
     
       unbound Namespace URI
       `null`
     
     
       `XMLConstants.XML_NS_URI`
           ("http://www.w3.org/XML/1998/namespace")
       `XMLConstants.XML_NS_PREFIX` ("xml")
     
     
       `XMLConstants.XMLNS_ATTRIBUTE_NS_URI`
           ("http://www.w3.org/2000/xmlns/")
       `XMLConstants.XMLNS_ATTRIBUTE` ("xmlns")
     
     
       `null`
       `IllegalArgumentException` is thrown

**参数**

- **namespaceURI** — URI of Namespace to lookup

**返回**

- prefix bound to Namespace URI in current context

**异常**

- **IllegalArgumentException** — When `namespaceURI` is `null`
