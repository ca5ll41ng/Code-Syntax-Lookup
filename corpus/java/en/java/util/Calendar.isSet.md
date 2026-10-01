---
id: "java-en-function-calendar-isset"
language: "java"
lang: "en"
category: "function"
name: "Calendar.isSet"
signature: "public final boolean isSet(int field)"
title: "Calendar.isSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.isSet

```java
public final boolean isSet(int field)
```

Determines if the given calendar field has a value set,
 including cases that the value has been set by internal fields
 calculations triggered by a `get` method call.

**参数**

- **field** — the calendar field to test

**返回**

- `true` if the given calendar field has a value set; `false` otherwise.
