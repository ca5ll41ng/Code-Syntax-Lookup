---
id: "java-en-function-prefixtree-match"
language: "java"
lang: "en"
category: "function"
name: "PrefixTree.match"
signature: "public PrefixTree match(CharSequence text, int off, int end)"
title: "PrefixTree.match"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrefixTree.match

```java
public PrefixTree match(CharSequence text, int off, int end)
```

Match text with the prefix tree.

**参数**

- **text** — the input text to parse, not null
- **off** — the offset position to start parsing at
- **end** — the end position to stop parsing

**返回**

- the resulting tree, or null if no match found.
