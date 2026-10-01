---
id: "java-en-function-defaulthandler-characters"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.characters"
signature: "public void characters (char ch[], int start, int length) throws SAXException"
title: "DefaultHandler.characters"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.characters

```java
public void characters (char ch[], int start, int length) throws SAXException
```

Receive notification of character data inside an element.

 

By default, do nothing.  Application writers may override this
 method to take specific actions for each chunk of character data
 (such as adding the data to a node or buffer, or printing it to
 a file).

**参数**

- **ch** — The characters.
- **start** — The start position in the character array.
- **length** — The number of characters to use from the character array.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ContentHandler#characters
