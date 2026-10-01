---
id: "en-php-function-function-stream-filter-register"
language: "php"
lang: "en"
category: "function"
name: "stream_filter_register"
title: "Register a user defined stream filter"
signature: "bool stream_filter_register(string $filter_name, string $class)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-filter-register.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register a user defined stream filter

## Description

```php
bool stream_filter_register(string $filter_name, string $class)
```

`stream_filter_register()` allows you to implement your own filter on any registered stream used with all the other filesystem functions (such as `fopen()`, `fread()` etc.).

## Parameters

- **`$filter_name`** — The filter name to be registered.
- **`$class`** — To implement a filter, you need to define a class as an extension of `php_user_filter` with a number of member functions. When performing read/write operations on the stream to which your filter is attached, PHP will pass the data through your filter (and any other filters attached to that stream) so that the data may be modified as desired. You must implement the methods exactly as described in `php_user_filter` - doing otherwise will lead to undefined behaviour.

## Return Values

Returns `true` on success or `false` on failure.

`stream_filter_register()` will return `false` if the `$filter_name` is already defined.

## Examples

**Filter for capitalizing characters on `foo-bar.txt` stream**

The example below implements a filter named `strtoupper` on the `foo-bar.txt` stream which will capitalize all letter characters written to/read from that stream.

```php


<?php

/* Define our filter class */
class strtoupper_filter extends php_user_filter {
  function filter($in, $out, &$consumed, $closing)
  {
    while ($bucket = stream_bucket_make_writeable($in)) {
      $bucket->data = strtoupper($bucket->data);
      $consumed += $bucket->datalen;
      stream_bucket_append($out, $bucket);
    }
    return PSFS_PASS_ON;
  }
}

/* Register our filter with PHP */
stream_filter_register("strtoupper", "strtoupper_filter")
    or die("Failed to register filter");

$fp = fopen("foo-bar.txt", "w");

/* Attach the registered filter to the stream just opened */
stream_filter_append($fp, "strtoupper");

fwrite($fp, "Line1\n");
fwrite($fp, "Word - 2\n");
fwrite($fp, "Easy As 123\n");

fclose($fp);

/* Read the contents back out
 */
readfile("foo-bar.txt");

?>

    
```

The above example will output:

```text


LINE1
WORD - 2
EASY AS 123

    
```

**Registering a generic filter class to match multiple filter names.**

```php


<?php

/* Define our filter class */
class string_filter extends php_user_filter {
  var $mode;

  function filter($in, $out, &$consumed, $closing)
  {
    while ($bucket = stream_bucket_make_writeable($in)) {
      if ($this->mode == 1) {
        $bucket->data = strtoupper($bucket->data);
      } elseif ($this->mode == 0) {
        $bucket->data = strtolower($bucket->data);
      }

      $consumed += $bucket->datalen;
      stream_bucket_append($out, $bucket);
    }
    return PSFS_PASS_ON;
  }

  function onCreate()
  {
    if ($this->filtername == 'str.toupper') {
      $this->mode = 1;
    } elseif ($this->filtername == 'str.tolower') {
      $this->mode = 0;
    } else {
      /* Some other str.* filter was asked for,
         report failure so that PHP will keep looking */
      return false;
    }

    return true;
  }
}

/* Register our filter with PHP */
stream_filter_register("str.*", "string_filter")
    or die("Failed to register filter");

$fp = fopen("foo-bar.txt", "w");

/* Attach the registered filter to the stream just opened
   We could alternately bind to str.tolower here */
stream_filter_append($fp, "str.toupper");

fwrite($fp, "Line1\n");
fwrite($fp, "Word - 2\n");
fwrite($fp, "Easy As 123\n");

fclose($fp);

/* Read the contents back out
 */
readfile("foo-bar.txt");
?>

    
```

The above example will output:

```text


LINE1
WORD - 2
EASY AS 123

    
```

## See Also

`stream_wrapper_register()` `stream_filter_append()` `stream_filter_prepend()`
