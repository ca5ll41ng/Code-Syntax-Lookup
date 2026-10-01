---
id: "java-en-function-sourcelocator-getcolumnnumber"
language: "java"
lang: "en"
category: "function"
name: "SourceLocator.getColumnNumber"
signature: "public int getColumnNumber()"
title: "SourceLocator.getColumnNumber"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/SourceLocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SourceLocator.getColumnNumber

```java
public int getColumnNumber()
```

Return the character position where the current document event ends.

 

**Warning:** The return value from the method
 is intended only as an approximation for the sake of error
 reporting; it is not intended to provide sufficient information
 to edit the character content of the original XML document.

 

The return value is an approximation of the column number
 in the document entity or external parsed entity where the
 markup that triggered the event appears.

**返回**

- The column number, or -1 if none is available.

**参见**

- #getLineNumber
