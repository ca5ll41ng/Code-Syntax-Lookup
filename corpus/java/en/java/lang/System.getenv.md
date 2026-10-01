---
id: "java-en-function-system-getenv"
language: "java"
lang: "en"
category: "function"
name: "System.getenv"
signature: "public static String getenv(String name)"
title: "System.getenv"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.getenv

```java
public static String getenv(String name)
```

Gets the value of the specified environment variable. An
 environment variable is a system-dependent external named
 value.

 

System
 properties and environment variables are both
 conceptually mappings between names and values.  Both
 mechanisms can be used to pass user-defined information to a
 Java process.  Environment variables have a more global effect,
 because they are visible to all descendants of the process
 which defines them, not just the immediate Java subprocess.
 They can have subtly different semantics, such as case
 insensitivity, on different operating systems.  For these
 reasons, environment variables are more likely to have
 unintended side effects.  It is best to use system properties
 where possible.  Environment variables should be used when a
 global effect is desired, or when an external system interface
 requires an environment variable (such as `PATH`).

 

On UNIX systems the alphabetic case of `name` is
 typically significant, while on Microsoft Windows systems it is
 typically not.  For example, the expression
 `System.getenv("FOO").equals(System.getenv("foo"))`
 is likely to be true on Microsoft Windows.

**参数**

- **name** — the name of the environment variable

**返回**

- the string value of the variable, or `null` if the variable is not defined in the system environment

**异常**

- **NullPointerException** — if `name` is `null`

**参见**

- #getenv()
- ProcessBuilder#environment()
