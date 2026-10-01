---
id: "en-php-function-function-stream-filter-prepend"
language: "php"
lang: "en"
category: "function"
name: "stream_filter_prepend"
title: "Attach a filter to a stream"
signature: "resource stream_filter_prepend(resource $stream, string $filter_name, [int $mode = ...], [mixed $params = ...])"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-filter-prepend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attach a filter to a stream

## Description

```php
resource stream_filter_prepend(resource $stream, string $filter_name, [int $mode = ...], [mixed $params = ...])
```

Adds `$filter_name` to the list of filters attached to `$stream`.

## Parameters

- **`$stream`** — The target stream.
- **`$filter_name`** — The filter name.
- **`$mode`** — By default, `stream_filter_prepend()` will attach the filter to the `read filter chain` if the file was opened for reading (i.e. File Mode: `r`, and/or `+`). The filter will also be attached to the `write filter chain` if the file was opened for writing (i.e. File Mode: `w`, `a`, and/or `+`). `STREAM_FILTER_READ`, `STREAM_FILTER_WRITE`, and/or `STREAM_FILTER_ALL` can also be passed to the `$mode` parameter to override this behavior. See `stream_filter_append()` for an example of using this parameter.
- **`$params`** — This filter will be added with the specified `$params` to the *beginning* of the list and will therefore be called first during stream operations. To add a filter to the end of the list, use `stream_filter_append()`.

## Return Values

Returns a resource on success or `false` on failure. The resource can be used to refer to this filter instance during a call to `stream_filter_remove()`.

`false` is returned if `$stream` is not a resource or if `$filter_name` cannot be located.

## Notes

> When using custom (user) filters
>
> `stream_filter_register()` must be called first in order to register the desired user filter to `$filter_name`.

> Stream data is read from resources (both local and remote) in chunks, with any unconsumed data kept in internal buffers. When a new filter is prepended to a stream, data in the internal buffers, which has already been processed through other filters will *not* be reprocessed through the new filter at that time. This differs from the behavior of `stream_filter_append()`.

> When a filter is added for read and write, two instances of the filter are created. `stream_filter_prepend()` must be called twice with `STREAM_FILTER_READ` and `STREAM_FILTER_WRITE` to get both filter resources.

## See Also

 `stream_filter_register()` `stream_filter_append()`
