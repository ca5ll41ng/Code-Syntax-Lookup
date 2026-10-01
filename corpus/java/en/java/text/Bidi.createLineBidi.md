---
id: "java-en-function-bidi-createlinebidi"
language: "java"
lang: "en"
category: "function"
name: "Bidi.createLineBidi"
signature: "public Bidi createLineBidi(int lineStart, int lineLimit)"
title: "Bidi.createLineBidi"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi.createLineBidi

```java
public Bidi createLineBidi(int lineStart, int lineLimit)
```

Create a Bidi object representing the bidi information on a line of text within
 the paragraph represented by the current Bidi.  This call is not required if the
 entire paragraph fits on one line.

**参数**

- **lineStart** — the offset from the start of the paragraph to the start of the line.
- **lineLimit** — the offset from the start of the paragraph to the limit of the line.

**返回**

- a `Bidi` object
