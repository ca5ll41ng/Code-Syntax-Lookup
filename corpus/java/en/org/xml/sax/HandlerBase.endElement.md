---
id: "java-en-function-handlerbase-endelement"
language: "java"
lang: "en"
category: "function"
name: "HandlerBase.endElement"
signature: "public void endElement (String name) throws SAXException"
title: "HandlerBase.endElement"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/HandlerBase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandlerBase.endElement

```java
public void endElement (String name) throws SAXException
```

Receive notification of the end of an element.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions at the end of
 each element (such as finalising a tree node or writing
 output to a file).

**参数**

- **name** — the element name

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.DocumentHandler#endElement
