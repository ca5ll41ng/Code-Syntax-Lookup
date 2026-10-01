---
id: "java-en-function-reference-remove"
language: "java"
lang: "en"
category: "function"
name: "Reference.remove"
signature: "public Object remove(int posn)"
title: "Reference.remove"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.remove

```java
public Object remove(int posn)
```

Deletes the address at index posn from the list of addresses.
 All addresses at index greater than posn are shifted down
 the list by one (towards index 0).

**参数**

- **posn** — The 0-based index of in address to delete.

**返回**

- The address removed.

**异常**

- **ArrayIndexOutOfBoundsException** — If posn not in the specified range.
