---
id: "java-en-function-list-get"
language: "java"
lang: "en"
category: "function"
name: "List.get"
signature: "E get(int index)"
title: "List.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.get

```java
E get(int index)
```

Returns the element at the specified position in this list.

**参数**

- **index** — index of the element to return

**返回**

- the element at the specified position in this list

**异常**

- **IndexOutOfBoundsException** — if the index is out of range (`index < 0 || index >= size()`)
