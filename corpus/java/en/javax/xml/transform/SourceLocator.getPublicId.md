---
id: "java-en-function-sourcelocator-getpublicid"
language: "java"
lang: "en"
category: "function"
name: "SourceLocator.getPublicId"
signature: "public String getPublicId()"
title: "SourceLocator.getPublicId"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/SourceLocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SourceLocator.getPublicId

```java
public String getPublicId()
```

Return the public identifier for the current document event.

 

The return value is the public identifier of the document
 entity or of the external parsed entity in which the markup that
 triggered the event appears.

**返回**

- A string containing the public identifier, or null if none is available.

**参见**

- #getSystemId
