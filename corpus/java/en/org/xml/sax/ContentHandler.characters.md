---
id: "java-en-function-contenthandler-characters"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.characters"
signature: "public void characters (char ch[], int start, int length) throws SAXException"
title: "ContentHandler.characters"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.characters

```java
public void characters (char ch[], int start, int length) throws SAXException
```

Receive notification of character data.

 

The Parser will call this method to report each chunk of
 character data.  SAX parsers may return all contiguous character
 data in a single chunk, or they may split it into several
 chunks; however, all of the characters in any single event
 must come from the same external entity so that the Locator
 provides useful information.

 

The application must not attempt to read from the array
 outside of the specified range.

 

Individual characters may consist of more than one Java
 char value.  There are two important cases where this
 happens, because characters can't be represented in just sixteen bits.
 In one case, characters are represented in a Surrogate Pair,
 using two special Unicode values. Such characters are in the so-called
 "Astral Planes", with a code point above U+FFFF.  A second case involves
 composite characters, such as a base character combining with one or
 more accent characters. 

 

 Your code should not assume that algorithms using
 char-at-a-time idioms will be working in character
 units; in some cases they will split characters.  This is relevant
 wherever XML permits arbitrary characters, such as attribute values,
 processing instruction data, and comments as well as in data reported
 from this method.  It's also generally relevant whenever Java code
 manipulates internationalized text; the issue isn't unique to XML.

 

Note that some parsers will report whitespace in element
 content using the `ignorableWhitespace ignorableWhitespace`
 method rather than this one (validating parsers must
 do so).

**参数**

- **ch** — the characters from the XML document
- **start** — the start position in the array
- **length** — the number of characters to read from the array

**异常**

- **org.xml.sax.SAXException** — any SAX exception, possibly wrapping another exception

**参见**

- #ignorableWhitespace
- org.xml.sax.Locator
