---
id: "en-php-function-function-stream-select"
language: "php"
lang: "en"
category: "function"
name: "stream_select"
title: "Runs the equivalent of the select() system call on the given arrays of streams with a timeout specified by seconds and microseconds"
signature: "int|false stream_select(array|null $read, array|null $write, array|null $except, int|null $seconds, int|null $microseconds = null)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-select.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runs the equivalent of the select() system call on the given arrays of streams with a timeout specified by seconds and microseconds

## Description

```php
int|false stream_select(array|null $read, array|null $write, array|null $except, int|null $seconds, int|null $microseconds = null)
```

The `stream_select()` function accepts arrays of streams and waits for them to change status. It is the stream counterpart of `socket_select()`, but the two do not behave alike in every respect: they report invalid arguments differently, and `stream_select()` can return without consulting the operating system at all, as described in the notes below.

## Parameters

- **`$read`** — The streams listed in the `$read` array will be watched to see if characters become available for reading (more precisely, to see if a read will not block - in particular, a stream resource is also ready on end-of-file, in which case an `fread()` will return a zero length string).
- **`$write`** — The streams listed in the `$write` array will be watched to see if a write will not block.
- **`$except`** — The streams listed in the `$except` array will be watched for high priority exceptional ("out-of-band") data arriving.
  > When `stream_select()` returns, the arrays `$read`, `$write` and `$except` are modified to indicate which stream resource(s) actually changed status. The original keys of the `array`s are preserved.


- **`$seconds`** — The `$seconds` and `$microseconds` together form the *timeout* parameter, `$seconds` specifies the number of seconds while `$microseconds` the number of microseconds. The `$timeout` is an upper bound on the amount of time that `stream_select()` will wait before it returns. If `$seconds` is set to `0` and `$microseconds` is `0` or `null`, `stream_select()` will not wait for data - instead it will return immediately, indicating the current status of the streams. — If `$seconds` is `null` `stream_select()` can block indefinitely, returning only when an event on one of the watched streams occurs (or if a signal interrupts the system call).
  > Using a timeout value of `0` allows you to instantaneously poll the status of the streams, however, it is NOT a good idea to use a `0` timeout value in a loop as it will cause your script to consume too much CPU time.
  >
  > It is much better to specify a timeout value of a few seconds, although if you need to be checking and running other code concurrently, using a timeout value of at least `200000` microseconds will help reduce the CPU usage of your script.
  >
  > Remember that the timeout value is the maximum time that will elapse; `stream_select()` will return as soon as the requested streams are ready for use.


- **`$microseconds`** — See `$seconds` description.

## Return Values

On success `stream_select()` returns the number of stream resources contained in the modified arrays, which may be zero if the timeout expires before anything interesting happens. On error `false` is returned and a warning raised (this can happen if the system call is interrupted by an incoming signal).

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | `$microseconds` is now nullable. |

## Examples

**`stream_select()` Example**

This example checks to see if data has arrived for reading on either `$$stream1` or `$$stream2`. Since the timeout value is `0` it will return immediately:

```php


<?php
/* Prepare the read array */
$read   = array($stream1, $stream2);
$write  = NULL;
$except = NULL;
if (false === ($num_changed_streams = stream_select($read, $write, $except, 0))) {
    /* Error handling */
} elseif ($num_changed_streams > 0) {
    /* At least on one of the streams something interesting happened */
}
?>

    
```

## Notes

> Due to a limitation in the current Zend Engine it is not possible to pass a constant modifier like `null` directly as a parameter to a function which expects this parameter to be passed by reference. Instead use a temporary variable or an expression with the leftmost member being a temporary variable:
>
> ```php
>
>
> <?php
> $e = NULL;
> stream_select($r, $w, $e, 0);
> ?>
>
>    
> ```

> Be sure to use the `===` operator when checking for an error. Since the `stream_select()` may return 0 the comparison with `==` would evaluate to `true`:
>
> ```php
>
>
> <?php
> $e = NULL;
> if (false === stream_select($r, $w, $e, 0)) {
>     echo "stream_select() failed\n";
> }
> ?>
>
>    
> ```

> When reading from or writing to a stream returned in the arrays, be aware that the full amount of data requested is not necessarily read or written. Be prepared for as little as a single byte.

> Some streams (like `zlib`) cannot be selected by this function.

> A stream that already holds buffered data on the PHP side is reported as ready without the underlying `select()` call being made. When that happens the `$write` and `$except` arrays are emptied without having been examined, so a stream that was ready for writing goes unreported and the return value counts the readable streams only.

> Windows compatibility
>
> Use of `stream_select()` on file descriptors returned by `proc_open()` will fail and return `false` under Windows.
>
> `STDIN` from a console changes status as soon as *any* input events are available, but reading from the stream may still block.

## See Also

 `stream_set_blocking()` `socket_select()`
