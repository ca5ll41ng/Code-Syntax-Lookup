---
id: "java-en-function-locale-getscript"
language: "java"
lang: "en"
category: "function"
name: "Locale.getScript"
signature: "public String getScript()"
title: "Locale.getScript"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getScript

```java
public String getScript()
```

Returns the script for this locale, which should
 either be the empty string or an ISO 15924 4-letter script
 code. The first letter is uppercase and the rest are
 lowercase, for example, 'Latn', 'Cyrl'.

**返回**

- The script code, or the empty string if none is defined.

**参见**

- #getDisplayScript

> *Since 1.7*
