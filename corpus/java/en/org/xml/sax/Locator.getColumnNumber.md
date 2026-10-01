---
id: "java-en-function-locator-getcolumnnumber"
language: "java"
lang: "en"
category: "function"
name: "Locator.getColumnNumber"
signature: "public abstract int getColumnNumber ()"
title: "Locator.getColumnNumber"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Locator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locator.getColumnNumber

```java
public abstract int getColumnNumber ()
```

Return the column number where the current document event ends.
 This is one-based number of Java char values since
 the last line end.

 

**Warning:** The return value from the method
 is intended only as an approximation for the sake of diagnostics;
 it is not intended to provide sufficient information
 to edit the character content of the original XML document.
 For example, when lines contain combining character sequences, wide
 characters, surrogate pairs, or bi-directional text, the value may
 not correspond to the column in a text editor's display. 

 

The return value is an approximation of the column number
 in the document entity or external parsed entity where the
 markup triggering the event appears.

 

If possible, the SAX driver should provide the line position
 of the first character after the text associated with the document
 event.  The first column in each line is column 1.

**返回**

- The column number, or -1 if none is available.

**参见**

- #getLineNumber
