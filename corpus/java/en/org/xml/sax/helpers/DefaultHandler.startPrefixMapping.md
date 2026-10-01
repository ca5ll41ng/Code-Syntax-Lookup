---
id: "java-en-function-defaulthandler-startprefixmapping"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.startPrefixMapping"
signature: "public void startPrefixMapping (String prefix, String uri) throws SAXException"
title: "DefaultHandler.startPrefixMapping"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.startPrefixMapping

```java
public void startPrefixMapping (String prefix, String uri) throws SAXException
```

Receive notification of the start of a Namespace mapping.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions at the start of
 each Namespace prefix scope (such as storing the prefix mapping).

**参数**

- **prefix** — The Namespace prefix being declared.
- **uri** — The Namespace URI mapped to the prefix.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ContentHandler#startPrefixMapping
