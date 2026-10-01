---
id: "java-en-function-javax-xml-stream-util-xmleventallocator"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.stream.util.XMLEventAllocator"
title: "XMLEventAllocator"
directive: "type"
module: "java.xml/javax.xml.stream.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/util/XMLEventAllocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventAllocator

This interface defines a class that allows a user to register
 a way to allocate events given an XMLStreamReader.  An implementation
 is not required to use the XMLEventFactory implementation but this
 is recommended.  The XMLEventAllocator can be set on an XMLInputFactory
 using the property "javax.xml.stream.allocator"

**参见**

- javax.xml.stream.XMLInputFactory
- javax.xml.stream.XMLEventFactory

> *Since 1.6*
