---
id: "java-en-function-namespacecontext-getnamespaceuri"
language: "java"
lang: "en"
category: "function"
name: "NamespaceContext.getNamespaceURI"
signature: "String getNamespaceURI(String prefix)"
title: "NamespaceContext.getNamespaceURI"
directive: "method"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/NamespaceContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceContext.getNamespaceURI

```java
String getNamespaceURI(String prefix)
```

Get Namespace URI bound to a prefix in the current scope.

 

When requesting a Namespace URI by prefix, the following
 table describes the returned Namespace URI value for all
 possible prefix values:

 
   Return value for specified prefixes
   
     
       prefix parameter
       Namespace URI return value
     
   
   
     
       `DEFAULT_NS_PREFIX` ("")
       default Namespace URI in the current scope or
          `NULL_NS_URI XMLConstants.NULL_NS_URI`
         
         when there is no default Namespace URI in the current scope
     
     
       bound prefix
       Namespace URI bound to prefix in current scope
     
     
       unbound prefix
       
          `NULL_NS_URI XMLConstants.NULL_NS_URI`
         
       
     
     
       `XMLConstants.XML_NS_PREFIX` ("xml")
       `XMLConstants.XML_NS_URI`
           ("http://www.w3.org/XML/1998/namespace")
     
     
       `XMLConstants.XMLNS_ATTRIBUTE` ("xmlns")
       `XMLConstants.XMLNS_ATTRIBUTE_NS_URI`
         ("http://www.w3.org/2000/xmlns/")
     
     
       `null`
       `IllegalArgumentException` is thrown

**参数**

- **prefix** — prefix to look up

**返回**

- Namespace URI bound to prefix in the current scope

**异常**

- **IllegalArgumentException** — When `prefix` is `null`
