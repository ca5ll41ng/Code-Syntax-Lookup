---
id: "java-en-function-documenthandler-characters"
language: "java"
lang: "en"
category: "function"
name: "DocumentHandler.characters"
signature: "public abstract void characters (char ch[], int start, int length) throws SAXException"
title: "DocumentHandler.characters"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DocumentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentHandler.characters

```java
public abstract void characters (char ch[], int start, int length) throws SAXException
```

Receive notification of character data.

 

The Parser will call this method to report each chunk of
 character data.  SAX parsers may return all contiguous character
 data in a single chunk, or they may split it into several
 chunks; however, all of the characters in any single event
 must come from the same external entity, so that the Locator
 provides useful information.

 

The application must not attempt to read from the array
 outside of the specified range.

 

Note that some parsers will report whitespace using the
 ignorableWhitespace() method rather than this one (validating
 parsers must do so).

**参数**

- **ch** — The characters from the XML document.
- **start** — The start position in the array.
- **length** — The number of characters to read from the array.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- #ignorableWhitespace
- org.xml.sax.Locator
