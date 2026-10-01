---
id: "java-en-function-system-getlocalizedlogger"
language: "java"
lang: "en"
category: "function"
name: "System.getLocalizedLogger"
signature: "public Logger getLocalizedLogger(String name, ResourceBundle bundle, Module module)"
title: "System.getLocalizedLogger"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.getLocalizedLogger

```java
public Logger getLocalizedLogger(String name, ResourceBundle bundle, Module module)
```

Returns a localizable instance of `Logger Logger`
 for the given `module`.
 The returned logger will use the provided resource bundle for
 message localization.

 this.getLogger` to obtain a logger, then wraps that
 logger in a `Logger` instance where all methods that do not
 take a `ResourceBundle` as parameter are redirected to one
 which does - passing the given `bundle` for
 localization. So for instance, a call to `log`
 will end up as a call to `log(Logger.Level, ResourceBundle, String, Object...)
 Logger.log` on the wrapped
 logger instance.
 Note however that by default, string messages returned by `java.util.function.Supplier Supplier&lt;String&gt;` will not be
 localized, as it is assumed that such strings are messages which are
 already constructed, rather than keys in a resource bundle.
 

 An implementation of `LoggerFinder` may override this method,
 for example, when the underlying logging backend provides its own
 mechanism for localizing log messages, then such a
 `LoggerFinder` would be free to return a logger
 that makes direct use of the mechanism provided by the backend.

**参数**

- **name** — the name of the logger.
- **bundle** — a resource bundle; can be `null`.
- **module** — the module for which the logger is being requested.

**返回**

- an instance of `Logger Logger`  which will use the provided resource bundle for message localization.

**异常**

- **NullPointerException** — if `name` is `null` or `module` is `null`.
