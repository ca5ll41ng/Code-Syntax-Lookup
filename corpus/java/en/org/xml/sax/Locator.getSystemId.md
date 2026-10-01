---
id: "java-en-function-locator-getsystemid"
language: "java"
lang: "en"
category: "function"
name: "Locator.getSystemId"
signature: "public abstract String getSystemId ()"
title: "Locator.getSystemId"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Locator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locator.getSystemId

```java
public abstract String getSystemId ()
```

Return the system identifier for the current document event.

 

The return value is the system identifier of the document
 entity or of the external parsed entity in which the markup
 triggering the event appears.

 

If the system identifier is a URL, the parser must resolve it
 fully before passing it to the application.  For example, a file
 name must always be provided as a file:... URL, and other
 kinds of relative URI are also resolved against their bases.

**返回**

- A string containing the system identifier, or null if none is available.

**参见**

- #getPublicId
