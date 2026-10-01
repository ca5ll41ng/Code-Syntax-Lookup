---
id: "java-en-function-uuid-fromstring"
language: "java"
lang: "en"
category: "function"
name: "UUID.fromString"
signature: "public static UUID fromString(String name)"
title: "UUID.fromString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.fromString

```java
public static UUID fromString(String name)
```

Creates a `UUID` from the string standard representation as
 described in the `toString` method.

**参数**

- **name** — A string that specifies a `UUID`

**返回**

- A `UUID` with the specified value

**异常**

- **IllegalArgumentException** — If name does not conform to the string representation as described in `toString`
