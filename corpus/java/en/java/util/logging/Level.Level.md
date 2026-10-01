---
id: "java-en-function-level-level"
language: "java"
lang: "en"
category: "function"
name: "Level.Level"
signature: "protected Level(String name, int value)"
title: "Level.Level"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Level.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Level.Level

```java
protected Level(String name, int value)
```

Create a named Level with a given integer value.
 

 Note that this constructor is "protected" to allow subclassing.
 In general clients of logging should use one of the constant Level
 objects such as SEVERE or FINEST.  However, if clients need to
 add new logging levels, they may subclass Level and define new
 constants.

**参数**

- **name** — the name of the Level, for example "SEVERE".
- **value** — an integer value for the level.

**异常**

- **NullPointerException** — if the name is null
