---
id: "java-en-function-filetime-toinstant"
language: "java"
lang: "en"
category: "function"
name: "FileTime.toInstant"
signature: "public Instant toInstant()"
title: "FileTime.toInstant"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileTime.toInstant

```java
public Instant toInstant()
```

Converts this `FileTime` object to an `Instant`.

 

 The conversion creates an `Instant` that represents the
 same point on the time-line as this `FileTime`.

 

 `FileTime` can store points on the time-line further in the
 future and further in the past than `Instant`. Conversion
 from such further time points saturates to `MIN` if
 earlier than `Instant.MIN` or `MAX` if later
 than `Instant.MAX`.

**返回**

- an instant representing the same point on the time-line as this `FileTime` object

> *Since 1.8*
