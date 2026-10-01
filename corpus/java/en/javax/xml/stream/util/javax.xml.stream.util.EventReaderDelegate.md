---
id: "java-en-function-javax-xml-stream-util-eventreaderdelegate"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.stream.util.EventReaderDelegate"
title: "EventReaderDelegate"
directive: "type"
module: "java.xml/javax.xml.stream.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/util/EventReaderDelegate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventReaderDelegate

This is the base class for deriving an XMLEventReader
 filter.

 This class is designed to sit between an XMLEventReader and an
 application's XMLEventReader.  By default each method
 does nothing but call the corresponding method on the
 parent interface.

**参见**

- javax.xml.stream.XMLEventReader
- StreamReaderDelegate

> *Since 1.6*
