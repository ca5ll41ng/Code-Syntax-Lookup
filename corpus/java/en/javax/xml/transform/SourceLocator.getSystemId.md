---
id: "java-en-function-sourcelocator-getsystemid"
language: "java"
lang: "en"
category: "function"
name: "SourceLocator.getSystemId"
signature: "public String getSystemId()"
title: "SourceLocator.getSystemId"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/SourceLocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SourceLocator.getSystemId

```java
public String getSystemId()
```

Return the system identifier for the current document event.

 

The return value is the system identifier of the document
 entity or of the external parsed entity in which the markup that
 triggered the event appears.

 

If the system identifier is a URL, the parser must resolve it
 fully before passing it to the application.

**返回**

- A string containing the system identifier, or null if none is available.

**参见**

- #getPublicId
