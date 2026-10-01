---
id: "java-en-function-charset-availablecharsets"
language: "java"
lang: "en"
category: "function"
name: "Charset.availableCharsets"
signature: "public static SortedMap<String,Charset> availableCharsets()"
title: "Charset.availableCharsets"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.availableCharsets

```java
public static SortedMap<String,Charset> availableCharsets()
```

Constructs a sorted map from canonical charset names to charset objects.

 

 The map returned by this method will have one entry for each charset
 for which support is available in the current Java virtual machine.  If
 two or more supported charsets have the same canonical name then the
 resulting map will contain just one of them; which one it will contain
 is not specified. 

 

 The invocation of this method, and the subsequent use of the
 resulting map, may cause time-consuming disk or network I/O operations
 to occur.  This method is provided for applications that need to
 enumerate all of the available charsets, for example to allow user
 charset selection.  This method is not used by the `forName
 forName` method, which instead employs an efficient incremental lookup
 algorithm.

 

 This method may return different results at different times if new
 charset providers are dynamically made available to the current Java
 virtual machine.  In the absence of such changes, the charsets returned
 by this method are exactly those that can be retrieved via the `forName forName` method.

**返回**

- An immutable, case-insensitive map from canonical charset names to charset objects
