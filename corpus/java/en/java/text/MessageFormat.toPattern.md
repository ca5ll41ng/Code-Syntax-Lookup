---
id: "java-en-function-messageformat-topattern"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.toPattern"
signature: "public String toPattern()"
title: "MessageFormat.toPattern"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.toPattern

```java
public String toPattern()
```

{@return a String pattern adhering to the `#patterns patterns section` that
 represents the current state of this `MessageFormat`}

 The string is constructed from internal information and therefore
 does not necessarily equal the previously applied pattern. The order of
 `FormatStyle` matching is not guaranteed. That is, a `FormatStyle` produced may not be equivalent to the corresponding style passed,
 in the instance that multiple styles are equivalent.

 string that, when passed to a `MessageFormat()` constructor
 or `applyPattern applyPattern`, produces an instance that
 is semantically equivalent to this instance. If a subformat cannot be
 converted to a String pattern, the `FormatType` and `FormatStyle`
 will be omitted from the `FormatElement`.
