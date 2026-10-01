---
id: "java-en-function-matchresult-namedgroups"
language: "java"
lang: "en"
category: "function"
name: "MatchResult.namedGroups"
signature: "default Map<String,Integer> namedGroups()"
title: "MatchResult.namedGroups"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/MatchResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchResult.namedGroups

```java
default Map<String,Integer> namedGroups()
```

Returns an unmodifiable map from capturing group names to group numbers.
 If there are no named groups, returns an empty map.

          `UnsupportedOperationException`

 This method must be overridden by an implementation that supports
 named groups.

**返回**

- an unmodifiable map from capturing group names to group numbers

**异常**

- **UnsupportedOperationException** — if the implementation does not support named groups.

> *Since 20*
