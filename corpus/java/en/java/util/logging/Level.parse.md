---
id: "java-en-function-level-parse"
language: "java"
lang: "en"
category: "function"
name: "Level.parse"
signature: "public static synchronized Level parse(String name) throws IllegalArgumentException"
title: "Level.parse"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Level.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Level.parse

```java
public static synchronized Level parse(String name) throws IllegalArgumentException
```

Parse a level name string into a Level.
 

 The argument string may consist of either a level name
 or an integer value.
 

 For example:
 
 
-      "SEVERE"
 
-      "1000"

**参数**

- **name** — string to be parsed

**返回**

- The parsed value. Passing an integer that corresponds to a known name (e.g., 700) will return the associated name (e.g., CONFIG). Passing an integer that does not (e.g., 1) will return a new level name initialized to that value.

**异常**

- **NullPointerException** — if the name is null
- **IllegalArgumentException** — if the value is not valid. Valid values are integers between Integer.MIN_VALUE and Integer.MAX_VALUE, and all known level names. Known names are the levels defined by this class (e.g., FINE, FINER, FINEST), or created by this class with appropriate package access, or new levels defined or created by subclasses.
