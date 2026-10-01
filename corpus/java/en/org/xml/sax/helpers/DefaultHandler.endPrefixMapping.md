---
id: "java-en-function-defaulthandler-endprefixmapping"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.endPrefixMapping"
signature: "public void endPrefixMapping (String prefix) throws SAXException"
title: "DefaultHandler.endPrefixMapping"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.endPrefixMapping

```java
public void endPrefixMapping (String prefix) throws SAXException
```

Receive notification of the end of a Namespace mapping.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions at the end of
 each prefix mapping.

**参数**

- **prefix** — The Namespace prefix being declared.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ContentHandler#endPrefixMapping
