---
id: "java-en-function-locale-getdisplayscript"
language: "java"
lang: "en"
category: "function"
name: "Locale.getDisplayScript"
signature: "public String getDisplayScript()"
title: "Locale.getDisplayScript"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getDisplayScript

```java
public String getDisplayScript()
```

Returns a name for `this` locale's script that is appropriate for display to
 the user. If possible, the name will be localized for the default
 `DISPLAY DISPLAY` locale.  Returns
 the empty string if this locale doesn't specify a script code.

**返回**

- The display name of the script code appropriate to the default `DISPLAY DISPLAY` locale.

> *Since 1.7*
