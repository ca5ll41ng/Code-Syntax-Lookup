---
id: "java-en-function-chronology-getid"
language: "java"
lang: "en"
category: "function"
name: "Chronology.getId"
signature: "String getId()"
title: "Chronology.getId"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.getId

```java
String getId()
```

Gets the ID of the chronology.
 

 The ID uniquely identifies the `Chronology`.
 It can be used to lookup the `Chronology` using `of`.

**返回**

- the chronology ID, not null

**参见**

- #getCalendarType()
