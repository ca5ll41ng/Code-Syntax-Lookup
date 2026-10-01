---
id: "java-en-function-calendar-before"
language: "java"
lang: "en"
category: "function"
name: "Calendar.before"
signature: "public boolean before(Object when)"
title: "Calendar.before"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.before

```java
public boolean before(Object when)
```

Returns whether this `Calendar` represents a time
 before the time represented by the specified
 `Object`. This method is equivalent to:
 
```
`compareTo(when) < 0
 `
```

 if and only if `when` is a `Calendar`
 instance. Otherwise, the method returns `false`.

**参数**

- **when** — the `Object` to be compared

**返回**

- `true` if the time of this `Calendar` is before the time represented by `when`; `false` otherwise.

**参见**

- #compareTo(Calendar)
