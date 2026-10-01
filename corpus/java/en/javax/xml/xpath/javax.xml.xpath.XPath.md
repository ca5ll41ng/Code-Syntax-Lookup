---
id: "java-en-function-javax-xml-xpath-xpath"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.xpath.XPath"
title: "XPath"
directive: "type"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPath

`XPath` provides access to the XPath evaluation environment and expressions.
 The XPath evaluation is affected by the factors described in the following table.

 
 
    Evaluation of XPath Expressions
    
      
        Factor
        Behavior
      
    
    
    
      context
      
        The type of the context is implementation-dependent. If the value is
        null, the operation must have no dependency on the context, otherwise
        an XPathExpressionException will be thrown.

        For the purposes of evaluating XPath expressions, a DocumentFragment
        is treated like a Document node.
      
    
    
      variables
      
        If the expression contains a variable reference, its value will be found through the `XPathVariableResolver`
        set with `setXPathVariableResolver`.
        An `XPathExpressionException` is raised if the variable resolver is undefined or
        the resolver returns `null` for the variable.
        The value of a variable must be immutable through the course of any single evaluation.
      
    
    
      functions
      
        If the expression contains a function reference, the function will be found through the `XPathFunctionResolver`
        set with `setXPathFunctionResolver`.
        An `XPathExpressionException` is raised if the function resolver is undefined or
        the function resolver returns `null` for the function.
      
    
    
      QNames
      
        QNames in the expression are resolved against the XPath namespace context
        set with `setNamespaceContext`.
      
    
    
      result
      
        This result of evaluating an expression is converted to an instance of the desired return type.
        Valid return types are defined in `XPathConstants`.
        Conversion to the return type follows XPath conversion rules.
      
    
    
 

 

An XPath object is not thread-safe and not reentrant.
 In other words, it is the application's responsibility to make
 sure that one `XPath` object is not used from
 more than one thread at any given time, and while the `evaluate`
 method is invoked, applications may not recursively call
 the `evaluate` method.

**参见**

- XML Path Language (XPath) Version 1.0

> *Since 1.5*
