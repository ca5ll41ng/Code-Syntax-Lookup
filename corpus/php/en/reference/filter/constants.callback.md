---
id: "en-php-guide-filter-constants-callback"
language: "php"
lang: "en"
category: "guide"
name: "filter.constants.callback"
title: "User Defined Filter"
module: "filter"
source_url: "https://www.php.net/manual/en/filter.constants.callback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# User Defined Filter

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`FILTER_CALLBACK` (`int`)** — This filter delegates the filtering to a user defined function. The `callable` is passed via the `$options` parameter as the value associated to the `'options'` key. — The callback should have the following signature: `mixed``{callback}()` `string``$value` - **`$value`** — The value that is being filtered.
  > The value returned by the callback will be the value returned by the invoked filter function.


  **Example of using `FILTER_CALLBACK` to validate a login name**

  ```php


  <?php
  function validate_login(string $value): ?string
  {
      if (strlen($value) >= 5 && ctype_alnum($value)) {
          return $value;
      }
      return null;
  }

  $login = "val1dL0gin";
  $filtered_login = filter_var($login, FILTER_CALLBACK, ['options' => 'validate_login']);
  var_dump($filtered_login);

  $login = "f&ke login";
  $filtered_login = filter_var($login, FILTER_CALLBACK, ['options' => 'validate_login']);
  var_dump($filtered_login);
  ?>

       
  ```

  The above example will output:

  ```text


  string(10) "val1dL0gin"
  NULL

       
  ```


  > As of PHP 8.1.25 and 8.2.12, the structural flags `FILTER_REQUIRE_ARRAY`, `FILTER_FORCE_ARRAY` and `FILTER_REQUIRE_SCALAR` apply to this filter, and `FILTER_NULL_ON_FAILURE` changes how such a structural failure is reported. In earlier versions all flags were ignored. Filter specific flags are always ignored, and since the return value of the callback is the result, the callback itself cannot fail: no flag turns a `false` returned by the callback into `null` or an exception.
