---
id: "java-en-function-java-util-stringjoiner"
language: "java"
lang: "en"
category: "function"
name: "java.util.StringJoiner"
title: "StringJoiner"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringJoiner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringJoiner

`StringJoiner` is used to construct a sequence of characters separated
 by a delimiter and optionally starting with a supplied prefix
 and ending with a supplied suffix.
 

 Prior to adding something to the `StringJoiner`, its
 `sj.toString()` method will, by default, return `prefix + suffix`.
 However, if the `setEmptyValue` method is called, the `emptyValue`
 supplied will be returned instead. This can be used, for example, when
 creating a string using set notation to indicate an empty set, i.e.
 "{}", where the `prefix` is "{", the
 `suffix` is "}" and nothing has been added to the
 `StringJoiner`.

 

The String `"[George:Sally:Fred]"` may be constructed as follows:

 
```
 `StringJoiner sj = new StringJoiner(":", "[", "]");
 sj.add("George").add("Sally").add("Fred");
 String desiredString = sj.toString();
 `
```

 

 A `StringJoiner` may be employed to create formatted output from a
 `java.util.stream.Stream` using
 `joining`. For example:

 
```
 `List numbers = Arrays.asList(1, 2, 3, 4);
 String commaSeparatedNumbers = numbers.stream()
     .map(i -> i.toString())
     .collect(Collectors.joining(", "));
 `
```

**参见**

- java.util.stream.Collectors#joining(CharSequence)
- java.util.stream.Collectors#joining(CharSequence, CharSequence, CharSequence)

> *Since 1.8*
