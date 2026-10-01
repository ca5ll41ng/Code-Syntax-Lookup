---
id: "java-en-function-manifest-getentries"
language: "java"
lang: "en"
category: "function"
name: "Manifest.getEntries"
signature: "public Map<String,Attributes> getEntries()"
title: "Manifest.getEntries"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Manifest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Manifest.getEntries

```java
public Map<String,Attributes> getEntries()
```

Returns a Map of the entries contained in this Manifest. Each entry
 is represented by a String name (key) and associated Attributes (value).
 The Map permits the `null` key, but no entry with a null key is
 created by `read`, nor is such an entry written by using `write`.

**返回**

- a Map of the entries contained in this Manifest
