---
id: "java-en-function-javax-xml-xpath-xpathvariableresolver"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.xpath.XPathVariableResolver"
title: "XPathVariableResolver"
directive: "type"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathVariableResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathVariableResolver

XPathVariableResolver provides access to the set of user defined XPath variables.

 

The XPathVariableResolver and the XPath evaluator must adhere to a contract that
 cannot be directly enforced by the API.  Although variables may be mutable,
 that is, an application may wish to evaluate the same XPath expression more
 than once with different variable values, in the course of evaluating any
 single XPath expression, a variable's value **must**
 not change.

> *Since 1.5*
