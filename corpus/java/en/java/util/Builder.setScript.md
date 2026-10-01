---
id: "java-en-function-builder-setscript"
language: "java"
lang: "en"
category: "function"
name: "Builder.setScript"
signature: "public Builder setScript(String script)"
title: "Builder.setScript"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setScript

```java
public Builder setScript(String script)
```

Sets the script. If `script` is null or the empty string,
 the script in this `Builder` is removed.
 Otherwise, the script must be `#def_script well-formed` or an
 exception is thrown.

 

The typical script value is a four-letter script code as defined by ISO 15924.

**参数**

- **script** — the script

**返回**

- This builder.

**异常**

- **IllformedLocaleException** — if `script` is ill-formed
