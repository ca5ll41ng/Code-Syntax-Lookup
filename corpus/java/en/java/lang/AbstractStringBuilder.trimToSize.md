---
id: "java-en-function-abstractstringbuilder-trimtosize"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.trimToSize"
signature: "public void trimToSize()"
title: "AbstractStringBuilder.trimToSize"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.trimToSize

```java
public void trimToSize()
```

Attempts to reduce storage used for the character sequence.
 If the buffer is larger than necessary to hold its current sequence of
 characters, then it may be resized to become more space efficient.
 Calling this method may, but is not required to, affect the value
 returned by a subsequent call to the `capacity` method.
