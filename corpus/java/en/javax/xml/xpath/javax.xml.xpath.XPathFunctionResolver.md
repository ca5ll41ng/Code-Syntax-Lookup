---
id: "java-en-function-javax-xml-xpath-xpathfunctionresolver"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.xpath.XPathFunctionResolver"
title: "XPathFunctionResolver"
directive: "type"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFunctionResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFunctionResolver

XPathFunctionResolver provides access to the set of user defined XPathFunctions.

 

XPath functions are resolved by name and arity.
 The resolver is not needed for XPath built-in functions and the resolver
 **cannot** be used to override those functions.

 

In particular, the resolver is only called for functions in an another
 namespace (functions with an explicit prefix). This means that you cannot
 use the XPathFunctionResolver to implement specifications
 like XML-Signature Syntax
 and Processing which extend the function library of XPath 1.0 in the
 same namespace. This is a consequence of the design of the resolver.

 

If you wish to implement additional built-in functions, you will have to
 extend the underlying implementation directly.

**参见**

- XML Path Language (XPath) Version 1.0, Core Function Library

> *Since 1.5*
