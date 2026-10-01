---
id: "java-en-function-javax-xml-xpath-xpathfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.xpath.XPathFactory"
title: "XPathFactory"
directive: "type"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactory

An `XPathFactory` instance can be used to create
 `javax.xml.xpath.XPath` objects.

See `newInstance` for lookup mechanism.

 

The `XPathFactory` class is not thread-safe. In other words,
 it is the application's responsibility to ensure that at most
 one thread is using a `XPathFactory` object at any
 given moment. Implementations are encouraged to mark methods
 as synchronized to protect themselves from broken clients.

 

`XPathFactory` is not re-entrant. While one of the
 newInstance methods is being invoked, applications
 may not attempt to recursively invoke a newInstance method,
 even from the same thread.

> *Since 1.5*
