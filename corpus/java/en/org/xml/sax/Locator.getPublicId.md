---
id: "java-en-function-locator-getpublicid"
language: "java"
lang: "en"
category: "function"
name: "Locator.getPublicId"
signature: "public abstract String getPublicId ()"
title: "Locator.getPublicId"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Locator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locator.getPublicId

```java
public abstract String getPublicId ()
```

Return the public identifier for the current document event.

 

The return value is the public identifier of the document
 entity or of the external parsed entity in which the markup
 triggering the event appears.

**返回**

- A string containing the public identifier, or null if none is available.

**参见**

- #getSystemId
