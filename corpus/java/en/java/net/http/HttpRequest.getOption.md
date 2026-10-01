---
id: "java-en-function-httprequest-getoption"
language: "java"
lang: "en"
category: "function"
name: "HttpRequest.getOption"
signature: "public <T> Optional<T> getOption(HttpOption<T> option)"
title: "HttpRequest.getOption"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpRequest.getOption

```java
public <T> Optional<T> getOption(HttpOption<T> option)
```

{@return the value configured on this request for the given option, if any}
 The default implementation of this method returns `empty`
 if `option` is non-null, otherwise throws `NullPointerException`.

**参数**

- **option** — a request configuration option
- **the** — type of the option

**参见**

- Builder#setOption(HttpOption, Object)

> *Since 26*
