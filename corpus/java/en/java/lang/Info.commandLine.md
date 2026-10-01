---
id: "java-en-function-info-commandline"
language: "java"
lang: "en"
category: "function"
name: "Info.commandLine"
signature: "Optional<String> commandLine()"
title: "Info.commandLine"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Info.commandLine

```java
Optional<String> commandLine()
```

Returns the command line of the process.
 

 If `command command` and  `arguments arguments` return
 non-empty optionals, this is simply a convenience method which concatenates
 the values of the two functions separated by spaces. Otherwise, it will return a
 best-effort, platform dependent representation of the command line.

          arguments may be truncated on some platforms due to system
          limitations.
          

          The executable pathname may contain only the
          name of the executable without the full path information.
          It is undecidable whether white space separates different
          arguments or is part of a single argument.

**返回**

- an `Optional` of the command line of the process
