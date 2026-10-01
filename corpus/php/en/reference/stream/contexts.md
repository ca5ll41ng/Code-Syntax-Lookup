---
id: "en-php-guide-stream-contexts"
language: "php"
lang: "en"
category: "guide"
name: "stream.contexts"
title: "Stream Contexts"
module: "stream"
source_url: "https://www.php.net/manual/en/stream.contexts.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stream Contexts

A `context` is a set of `parameters` and wrapper specific `options` which modify or enhance the behavior of a stream. `Contexts` are created using `stream_context_create()` and can be passed to most filesystem related stream creation functions (i.e. `fopen()`, `file()`, `file_get_contents()`, etc...).

`Options` can be specified when calling `stream_context_create()`, or later using `stream_context_set_option()`. A list of wrapper specific `options` can be found in the `context` chapter.

`Parameters` can be specified for `contexts` using the `stream_context_set_params()` function.
