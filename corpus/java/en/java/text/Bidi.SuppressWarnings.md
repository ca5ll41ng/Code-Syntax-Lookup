---
id: "java-en-function-bidi-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "Bidi.SuppressWarnings"
signature: "@SuppressWarnings(\"doclint:reference\") // cross-module links public Bidi(AttributedCharacterIterator paragraph)"
title: "Bidi.SuppressWarnings"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi.SuppressWarnings

```java
@SuppressWarnings("doclint:reference") // cross-module links public Bidi(AttributedCharacterIterator paragraph)
```

Create Bidi from the given paragraph of text.
 

 The RUN_DIRECTION attribute in the text, if present, determines the base
 direction (left-to-right or right-to-left).  If not present, the base
 direction is computed using the Unicode Bidirectional Algorithm, defaulting to left-to-right
 if there are no strong directional characters in the text.  This attribute, if
 present, must be applied to all the text in the paragraph.
 

 The BIDI_EMBEDDING attribute in the text, if present, represents embedding level
 information.  Negative values from -1 to -62 indicate overrides at the absolute value
 of the level.  Positive values from 1 to 62 indicate embeddings.  Where values are
 zero or not defined, the base embedding level as determined by the base direction
 is assumed.
 

 The NUMERIC_SHAPING attribute in the text, if present, converts European digits to
 other decimal digits before running the bidi algorithm.  This attribute, if present,
 must be applied to all the text in the paragraph.

**参数**

- **paragraph** — a paragraph of text with optional character and paragraph attribute information

**参见**

- java.desktop/java.awt.font.TextAttribute#BIDI_EMBEDDING
- java.desktop/java.awt.font.TextAttribute#NUMERIC_SHAPING
- java.desktop/java.awt.font.TextAttribute#RUN_DIRECTION
