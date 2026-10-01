---
id: "java-en-function-calendar-after"
language: "java"
lang: "en"
category: "function"
name: "Calendar.after"
signature: "public boolean after(Object when)"
title: "Calendar.after"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.after

```java
public boolean after(Object when)
```

Returns whether this `Calendar` represents a time
 after the time represented by the specified
 `Object`. This method is equivalent to:
 
```
`compareTo(when) > 0
 `
```

 if and only if `when` is a `Calendar`
 instance. Otherwise, the method returns `false`.

**参数**

- **when** — the `Object` to be compared

**返回**

- `true` if the time of this `Calendar` is after the time represented by `when`; `false` otherwise.

**参见**

- #compareTo(Calendar)
