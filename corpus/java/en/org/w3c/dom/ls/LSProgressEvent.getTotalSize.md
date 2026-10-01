---
id: "java-en-function-lsprogressevent-gettotalsize"
language: "java"
lang: "en"
category: "function"
name: "LSProgressEvent.getTotalSize"
signature: "public int getTotalSize()"
title: "LSProgressEvent.getTotalSize"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSProgressEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSProgressEvent.getTotalSize

```java
public int getTotalSize()
```

The total size of the document including all external resources, this
 number might change as a document is being parsed if references to
 more external resources are seen. A value of 0 is
 returned if the total size cannot be determined or estimated.
