---
id: "java-en-function-namespacecontext-getprefixes"
language: "java"
lang: "en"
category: "function"
name: "NamespaceContext.getPrefixes"
signature: "Iterator<String> getPrefixes(String namespaceURI)"
title: "NamespaceContext.getPrefixes"
directive: "method"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/NamespaceContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceContext.getPrefixes

```java
Iterator<String> getPrefixes(String namespaceURI)
```

Get all prefixes bound to a Namespace URI in the current
 scope.

 

An Iterator over String elements is returned in an arbitrary,
 **implementation dependent**, order.

 

**The `Iterator` is
 not modifiable.  e.g. the
 `remove()` method will throw
 `UnsupportedOperationException`.**

 

When requesting prefixes by Namespace URI, the following
 table describes the returned prefixes value for all Namespace
 URI values:

 
   Return value for specified Namespace URIs
   
     
       Namespace URI parameter
       prefixes value returned
     
   
   
     
       bound Namespace URI,
         including the ``
       
         `Iterator` over prefixes bound to Namespace URI in
         the current scope in an arbitrary,
         **implementation dependent**,
         order
       
     
     
       unbound Namespace URI
       empty `Iterator`
     
     
       `XMLConstants.XML_NS_URI`
           ("http://www.w3.org/XML/1998/namespace")
       `Iterator` with one element set to
         `XMLConstants.XML_NS_PREFIX` ("xml")
     
     
       `XMLConstants.XMLNS_ATTRIBUTE_NS_URI`
           ("http://www.w3.org/2000/xmlns/")
       `Iterator` with one element set to
         `XMLConstants.XMLNS_ATTRIBUTE` ("xmlns")
     
     
       `null`
       `IllegalArgumentException` is thrown

**参数**

- **namespaceURI** — URI of Namespace to lookup

**返回**

- `Iterator` for all prefixes bound to the Namespace URI in the current scope

**异常**

- **IllegalArgumentException** — When `namespaceURI` is `null`
