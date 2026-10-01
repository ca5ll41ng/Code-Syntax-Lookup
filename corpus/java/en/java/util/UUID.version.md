---
id: "java-en-function-uuid-version"
language: "java"
lang: "en"
category: "function"
name: "UUID.version"
signature: "public int version()"
title: "UUID.version"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.version

```java
public int version()
```

The version number associated with this `UUID`.  The version
 number describes how this `UUID` was generated.

 The version number has the following meaning:
 
 
- 1    Time-based UUID
 
- 2    DCE security UUID
 
- 3    Name-based UUID
 
- 4    Randomly generated UUID
 
- 7    Unix Epoch time-based UUID

**返回**

- The version number of this `UUID`
