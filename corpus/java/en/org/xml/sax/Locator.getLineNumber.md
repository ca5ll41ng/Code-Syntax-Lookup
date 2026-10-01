---
id: "java-en-function-locator-getlinenumber"
language: "java"
lang: "en"
category: "function"
name: "Locator.getLineNumber"
signature: "public abstract int getLineNumber ()"
title: "Locator.getLineNumber"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Locator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locator.getLineNumber

```java
public abstract int getLineNumber ()
```

Return the line number where the current document event ends.
 Lines are delimited by line ends, which are defined in
 the XML specification.

 

**Warning:** The return value from the method
 is intended only as an approximation for the sake of diagnostics;
 it is not intended to provide sufficient information
 to edit the character content of the original XML document.
 In some cases, these "line" numbers match what would be displayed
 as columns, and in others they may not match the source text
 due to internal entity expansion.  

 

The return value is an approximation of the line number
 in the document entity or external parsed entity where the
 markup triggering the event appears.

 

If possible, the SAX driver should provide the line position
 of the first character after the text associated with the document
 event.  The first line is line 1.

**返回**

- The line number, or -1 if none is available.

**参见**

- #getColumnNumber
