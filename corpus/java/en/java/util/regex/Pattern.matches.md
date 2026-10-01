---
id: "java-en-function-pattern-matches"
language: "java"
lang: "en"
category: "function"
name: "Pattern.matches"
signature: "public static boolean matches(String regex, CharSequence input)"
title: "Pattern.matches"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.matches

```java
public static boolean matches(String regex, CharSequence input)
```

Compiles the given regular expression and attempts to match the given
 input against it.

 

 An invocation of this convenience method of the form

 
```

 Pattern.matches(regex, input);
```

 behaves in exactly the same way as the expression

 
```

 Pattern.compile(regex).matcher(input).matches()
```

 

 If a pattern is to be used multiple times, compiling it once and reusing
 it will be more efficient than invoking this method each time.

**参数**

- **regex** — The expression to be compiled
- **input** — The character sequence to be matched

**返回**

- whether or not the regular expression matches on the input

**异常**

- **PatternSyntaxException** — If the expression's syntax is invalid
