---
id: "java-en-function-config-createfilter"
language: "java"
lang: "en"
category: "function"
name: "Config.createFilter"
signature: "public static ObjectInputFilter createFilter(String pattern)"
title: "Config.createFilter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Config.createFilter

```java
public static ObjectInputFilter createFilter(String pattern)
```

Returns an ObjectInputFilter from a string of patterns.
 

 Patterns are separated by ";" (semicolon). Whitespace is significant and
 is considered part of the pattern.
 If a pattern includes an equals assignment, "`=`" it sets a limit.
 If a limit appears more than once the last value is used.
 
     
- maxdepth=`value` - the maximum depth of a graph
     
- maxrefs=`value`  - the maximum number of internal references
     
- maxbytes=`value` - the maximum number of bytes in the input stream
     
- maxarray=`value` - the maximum array length allowed
 

 

 Other patterns match or reject class or package name
 as returned from `getName` and
 if an optional module name is present
 `getName`.
 Note that for arrays the element type is used in the pattern,
 not the array type.
 
 
- If the pattern starts with "!", the class is rejected if the remaining pattern is matched;
     otherwise the class is allowed if the pattern matches.
 
- If the pattern contains "/", the non-empty prefix up to the "/" is the module name;
     if the module name matches the module name of the class then
     the remaining pattern is matched with the class name.
     If there is no "/", the module name is not compared.
 
- If the pattern ends with ".**" it matches any class in the package and all subpackages.
 
- If the pattern ends with ".*" it matches any class in the package.
 
- If the pattern ends with "*", it matches any class with the pattern as a prefix.
 
- If the pattern is equal to the class name, it matches.
 
- Otherwise, the pattern is not matched.
 

 

 The resulting filter performs the limit checks and then
 tries to match the class, if any. If any of the limits are exceeded,
 the filter returns `REJECTED Status.REJECTED`.
 If the class is an array type, the class to be matched is the element type.
 Arrays of any number of dimensions are treated the same as the element type.
 For example, a pattern of "`!example.Foo`",
 rejects creation of any instance or array of `example.Foo`.
 The first pattern that matches, working from left to right, determines
 the `ALLOWED Status.ALLOWED`
 or `REJECTED Status.REJECTED` result.
 If the limits are not exceeded and no pattern matches the class,
 the result is `UNDECIDED Status.UNDECIDED`.

**参数**

- **pattern** — the pattern string to parse; not null

**返回**

- a filter to check a class being deserialized; `null` if no patterns

**异常**

- **IllegalArgumentException** — if the pattern string is illegal or malformed and cannot be parsed. In particular, if any of the following is true:   -    if a limit is missing the name or the name is not one of "maxdepth", "maxrefs", "maxbytes", or "maxarray"  -    if the value of the limit can not be parsed by `parseLong Long.parseLong` or is negative  -    if the pattern contains "/" and the module name is missing or the remaining pattern is empty  -    if the package is missing for ".*" and ".**"
