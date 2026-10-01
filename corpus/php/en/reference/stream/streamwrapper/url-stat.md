---
id: "en-php-function-streamwrapper-url-stat"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::url_stat"
title: "Retrieve information about a file"
signature: "public array|false streamWrapper::url_stat(string $path, int $flags)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.url-stat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve information about a file

## Description

```php
public array|false streamWrapper::url_stat(string $path, int $flags)
```

This method is called in response to all `stat()` related functions, such as: `copy()` `fileperms()` `fileinode()` `filesize()` `fileowner()` `filegroup()` `fileatime()` `filemtime()` `filectime()` `filetype()` `is_writable()` `is_readable()` `is_executable()` `is_file()` `is_dir()` `is_link()` `file_exists()` `lstat()` `stat()` `SplFileInfo::getPerms()` `SplFileInfo::getInode()` `SplFileInfo::getSize()` `SplFileInfo::getOwner()` `SplFileInfo::getGroup()` `SplFileInfo::getATime()` `SplFileInfo::getMTime()` `SplFileInfo::getCTime()` `SplFileInfo::getType()` `SplFileInfo::isWritable()` `SplFileInfo::isReadable()` `SplFileInfo::isExecutable()` `SplFileInfo::isFile()` `SplFileInfo::isDir()` `SplFileInfo::isLink()` `RecursiveDirectoryIterator::hasChildren()`

## Parameters

- **`$path`** — The file path or URL to stat. Note that in the case of a URL, it must be a :// delimited URL. Other URL forms are not supported.
- **`$flags`** — Holds additional flags set by the streams API. It can hold one or more of the following values OR'd together. | Flag | Description | | --- | --- | | STREAM_URL_STAT_LINK | For resources with the ability to link to other resource (such as an HTTP Location: forward, or a filesystem symlink). This flag specified that only information about the link itself should be returned, not the resource pointed to by the link. This flag is set in response to calls to `lstat()`, `is_link()`, or `filetype()`. | | STREAM_URL_STAT_QUIET | If this flag is set, your wrapper should not raise any errors. If this flag is not set, you are responsible for reporting errors using the `trigger_error()` function during stating of the path. |

## Return Values

Should return an `array` with the same elements as `stat()` does. Unknown or unavailable values should be set to a rational value (usually `0`). Special attention should be paid to `mode` as documented under `stat()`. Should return `false` on failure.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

 }}} 

 {{{ <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::url_stat</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> }}}

## Notes

 {{{ 

> The `streamWrapper::$context` property is updated if a valid context is passed to the caller function.

 }}} 

## See Also

`stat()` `streamwrapper::stream_stat()`
