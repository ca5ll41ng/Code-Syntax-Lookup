---
id: "java-en-function-handlerbase-startelement"
language: "java"
lang: "en"
category: "function"
name: "HandlerBase.startElement"
signature: "public void startElement (String name, AttributeList attributes) throws SAXException"
title: "HandlerBase.startElement"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/HandlerBase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandlerBase.startElement

```java
public void startElement (String name, AttributeList attributes) throws SAXException
```

Receive notification of the start of an element.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions at the start of
 each element (such as allocating a new tree node or writing
 output to a file).

**参数**

- **name** — The element type name.
- **attributes** — The specified or defaulted attributes.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.DocumentHandler#startElement
