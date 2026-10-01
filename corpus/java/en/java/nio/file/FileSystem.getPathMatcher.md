---
id: "java-en-function-filesystem-getpathmatcher"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.getPathMatcher"
signature: "public abstract PathMatcher getPathMatcher(String syntaxAndPattern)"
title: "FileSystem.getPathMatcher"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.getPathMatcher

```java
public abstract PathMatcher getPathMatcher(String syntaxAndPattern)
```

Returns a `PathMatcher` that performs match operations on the
 `String` representation of `Path` objects by interpreting a
 given pattern.

 The `syntaxAndPattern` parameter identifies the syntax and the
 pattern and takes the form:
 
```

 syntax**:**pattern
 
```

 where syntax is the non-empty name of the syntax, pattern
 is a possibly-empty pattern string, and `':'` stands for itself.

 

 A `FileSystem` implementation supports the "`glob`" and
 "`regex`" syntaxes, and may support others. The value of the syntax
 component is compared without regard to case.

 

 When the syntax is "`glob`" then the `String`
 representation of the path is matched using a limited pattern language
 that resembles regular expressions but with a simpler syntax. For example:

 
 Pattern Language
 
 
   Example
   Description
 
 
 
 
   `*.java`
   Matches a path that represents a file name ending in `.java`
 
 
   `*.*`
   Matches file names containing a dot
 
 
   `*.{java,class`}
   Matches file names ending with `.java` or `.class`
 
 
   `foo.?`
   Matches file names starting with `foo.` and a single
   character extension
 
 
   &#47;home&#47;*&#47;*
   Matches &#47;home&#47;gus&#47;data on UNIX platforms
 
 
   &#47;home&#47;**
   Matches &#47;home&#47;gus and
   &#47;home&#47;gus&#47;data on UNIX platforms
 
 
   C:&#92;&#92;*
   Matches C:&#92;foo and C:&#92;bar on the Windows
   platform (note that the backslash is escaped; as a string literal in the
   Java Language the pattern would be "C:&#92;&#92;&#92;&#92;*") 
 
 
 

 

 The following rules are used to interpret glob patterns:

 
   
- 

 The `*` character matches zero or more `Character
   characters` of a `getName(int) name` component without
   crossing directory boundaries. 

   
- 

 The `**` characters matches zero or more `Character
   characters` crossing directory boundaries. 

   
- 

 The `?` character matches exactly one character of a
   name component.

   
- 

 The backslash character (`\`) is used to escape characters
   that would otherwise be interpreted as special characters. The expression
   `\\` matches a single backslash and "\{" matches a left brace
   for example.  

   
- 

 The `[ ]` characters are a bracket expression that
   match a single character of a name component out of a set of characters.
   For example, `[abc]` matches `"a"`, `"b"`, or `"c"`.
   The hyphen (`-`) may be used to specify a range so `[a-z]`
   specifies a range that matches from `"a"` to `"z"` (inclusive).
   These forms can be mixed so [abce-g] matches `"a"`, `"b"`,
   `"c"`, `"e"`, `"f"` or `"g"`. If the character
   after the `[` is a `!` then it is used for negation so `[!a-c]` matches any character except `"a"`, `"b"`, or `"c"`.
   

 Within a bracket expression the `*`, `?` and `\`
   characters match themselves. The (`-`) character matches itself if
   it is the first character within the brackets, or the first character
   after the `!` if negating.

   
- 

 The `{ `} characters are a group of subpatterns, where
   the group matches if any subpattern in the group matches. The `","`
   character is used to separate the subpatterns. Groups cannot be nested.
   

   
- 

 Leading period&#47;dot characters in file name are
   treated as regular characters in match operations. For example,
   the `"*"` glob pattern matches file name `".login"`.
   The `isHidden` method may be used to test whether a file
   is considered hidden.
   

   
- 

 All other characters match themselves in an implementation
   dependent manner. This includes characters representing any `getSeparator name-separators`. 

   
- 

 The matching of `getRoot root` components is highly
   implementation-dependent and is not specified. 

 

 

 When the syntax is "`regex`" then the pattern component is a
 regular expression as defined by the `java.util.regex.Pattern`
 class.

 

  For both the glob and regex syntaxes, the matching details, such as
 whether the matching is case sensitive, are implementation-dependent
 and therefore not specified.

**参数**

- **syntaxAndPattern** — The syntax and pattern

**返回**

- A path matcher that may be used to match paths against the pattern

**异常**

- **IllegalArgumentException** — If the parameter does not take the form: `syntax:pattern`
- **java.util.regex.PatternSyntaxException** — If the pattern is invalid
- **UnsupportedOperationException** — If the pattern syntax is not known to the implementation

**参见**

- Files#newDirectoryStream(Path,String)
