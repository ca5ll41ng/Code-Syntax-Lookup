---
id: "zh-php-guide-filter-constants"
language: "php"
lang: "zh"
category: "guide"
name: "filter.constants"
title: "预定义常量"
module: "filter"
source_url: "https://www.php.net/manual/zh/filter.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`INPUT_POST` (`int`)** — POST 变量。
- **`INPUT_GET` (`int`)** — GET 变量。
- **`INPUT_COOKIE` (`int`)** — COOKIE 变量。
- **`INPUT_ENV` (`int`)** — ENV 变量。
- **`INPUT_SERVER` (`int`)** — SERVER 变量。
- **`INPUT_SESSION` (`int`)** — SESSION 变量。（自 PHP 8.0.0 起移除，之前未实现）
- **`INPUT_REQUEST` (`int`)** — REQUEST 变量。（自 PHP 8.0.0 起移除，之前未实现）

- **`FILTER_FLAG_NONE` (`int`)** — 没有 flag。
- **`FILTER_REQUIRE_SCALAR` (`int`)** — flag 要求过滤的输入是标量。
- **`FILTER_REQUIRE_ARRAY` (`int`)** — flag 要求过滤的输入是 `array`。
- **`FILTER_FORCE_ARRAY` (`int`)** — 此 flag 将标量输入封装为包含单个元素的 `array`，以供操作数组的过滤器使用。
- **`FILTER_NULL_ON_FAILURE` (`int`)** — 失败时使用 `null` 而不是 `false`。 — 可与任何验证 `FILTER_VALIDATE_{*}` 过滤器一起使用。

- **`FILTER_FLAG_STRIP_LOW` (`int`)** — 除去 ASCII 值小于 32 的字符。
- **`FILTER_FLAG_STRIP_HIGH` (`int`)** — 除去 ASCII 值大于 127 的字符。
- **`FILTER_FLAG_STRIP_BACKTICK` (`int`)** — 除去反引号（```）字符。
- **`FILTER_FLAG_ENCODE_LOW` (`int`)** — 对 ASCII 值小于 32 的字符进行编码。
- **`FILTER_FLAG_ENCODE_HIGH` (`int`)** — 对 ASCII 值大于 127 的字符进行编码。
- **`FILTER_FLAG_ENCODE_AMP` (`int`)** — 编码 `&`。
- **`FILTER_FLAG_NO_ENCODE_QUOTES` (`int`)** — 单双引号（`'` 和 `"`）将不会编码。
- **`FILTER_FLAG_EMPTY_STRING_NULL` (`int`)** — 如果字符串清理是空字符串，则将值转换为 `null`

- **`FILTER_VALIDATE_BOOL` (`int`)** — 对于 `"1"`、`1`（包括二进制、八进制和十六进制表示法）、`1.0`、`"true"`、`true`、`"on"` 和 `"yes"` 返回 `true`。 — 对于 `"0"`、`0`（包括二进制、八进制和十六进制表示法）、`0.0`、`"false"`、`false`、`"off"`、`"no"` 和 `""` 返回 `false`。 — 字符串值的比较不区分大小写。非 bool 值的返回值取决于 `FILTER_NULL_ON_FAILURE`。如果设置，则返回 `null`，否则返回 `false`。
  - **`default`** — 过滤失败时返回的值。

 — 自 PHP 8.0.0 起可用。
- **`FILTER_VALIDATE_BOOLEAN` (`int`)** — 别名 `FILTER_VALIDATE_BOOL`。该别名在 PHP 8.0.0 中引入其规范名称之前可用。
- **`FILTER_VALIDATE_INT` (`int`)** — 验证值是否为整数，成功时则转换为 `int` 类型。
  > 字符串值在验证之前使用 `trim()`。


  - **`default`** — 过滤失败时返回的值。
  - **`min_range`** — 只有当值大于或等于提供的值时，才有效。
  - **`max_range`** — 只有当该值小于或等于提供的值时，才有效。


  - **`FILTER_FLAG_ALLOW_OCTAL` (`int`)** — 允许八进制整数（`0[0-7]+`）。
  - **`FILTER_FLAG_ALLOW_HEX` (`int`)** — 允许十六进制整数（`0x[0-9a-fA-F]+`）。


- **`FILTER_VALIDATE_FLOAT` (`int`)** — 验证值是否为浮点数，成功时则转换为 `float` 类型。
  > 字符串值在验证之前使用 `trim()`。


  - **`default`** — 过滤失败时返回的值。
  - **`decimal`**
  - **`min_range`** — 只有当值大于或等于提供的值时，才有效。自 PHP 7.4.0 起可用。
  - **`max_range`** — 只有当该值小于或等于提供的值时，才有效。自 PHP 7.4.0 起可用。


  - **`FILTER_FLAG_ALLOW_THOUSAND` (`int`)** — 接受逗号（`,`），通常代表千位分隔符。


- **`FILTER_VALIDATE_REGEXP` (`int`)** — 根据 `regexp` 选项提供的正则表达式验证值。
  - **`default`** — 过滤失败时返回的值。
  - **`regexp`** — Perl 兼容的正则表达式。


- **`FILTER_VALIDATE_URL` (`int`)** — 根据 [RFC 2396](2396) 验证 URL 是否有效。
  - **`default`** — 过滤失败时返回的值。


  - **`FILTER_FLAG_SCHEME_REQUIRED` (`int`)** — 要求 URL 包含协议部分。
    > 自 PHP 7.3.0 起*弃用*，自 PHP 8.0.0 起*移除*。这是因为 `FILTER_VALIDATE_URL` 过滤器始终隐含。


  - **`FILTER_FLAG_HOST_REQUIRED` (`int`)** — 要求 URL 包含主机部分。
    > 自 PHP 7.3.0 起*弃用*，自 PHP 8.0.0 起*移除*。这是因为 `FILTER_VALIDATE_URL` 过滤器始终隐含。


  - **`FILTER_FLAG_PATH_REQUIRED` (`int`)** — 要求 URL 包含路径部分。
  - **`FILTER_FLAG_QUERY_REQUIRED` (`int`)** — 要求 URL 包含查询部分。


  > 有效的 URL 可能未指定 HTTP 协议（`http://`）。因此，可能需要进一步验证以确定 URL 是否使用期望的协议，例如 `ssh://` 或 `mailto:`。


  > 此过滤器仅适用于 ASCII URL。这意味着将始终拒绝国际化域名（IDN）。


- **`FILTER_VALIDATE_DOMAIN` (`int`)** — 根据 [RFC 952](952)、[RFC 1034](1034)、[RFC 1035](1035)、[RFC 1123](1034)、[RFC 2732](1034) 和 [RFC 2181](2181) 验证域名是否有效。
  - **`default`** — 过滤失败时返回的值。


  - **`FILTER_FLAG_HOSTNAME` (`int`)** — 要求主机名以字母数字开头，并且仅包含字母数字或连字符。


- **`FILTER_VALIDATE_EMAIL` (`int`)** — 验证值是否是“有效”的电子邮件地址。 — 验证是根据 [RFC 822](822) 中的 `addr-spec` 语法进行的。拒绝注释、空格折叠和无点域名。
  - **`default`** — 过滤失败时返回的值。


  - **`FILTER_FLAG_EMAIL_UNICODE` (`int`)** — 接受 local 部分中的 Unicode 字符。自 PHP 7.1.0 起可用。


  > 电子邮件验证很复杂，确认电子邮件有效且存在的唯一真正方法是向该地址发送电子邮件。


- **`FILTER_VALIDATE_IP` (`int`)** — 验证值为 IP 地址。
  - **`default`** — 过滤失败时返回的值。


  - **`FILTER_FLAG_IPV4` (`int`)** — 允许 IPv4 地址。
  - **`FILTER_FLAG_IPV6` (`int`)** — 允许 IPv6 地址。
  - **`FILTER_FLAG_NO_RES_RANGE` (`int`)** — 拒绝保留地址。 — 这些是在 [RFC 6890](6890) 中标记为`由协议保留`的范围。 — IPv4 的对应以下范围： `0.0.0.0/8` `169.254.0.0/16` `127.0.0.0/8` `240.0.0.0/4` . — IPv6 的对应以下范围： `::1/128` `::/128` `::FFFF:0:0/96` `FE80::/10` .
  - **`FILTER_FLAG_NO_PRIV_RANGE` (`int`)** — 拒绝私有地址。 — IPv4 的对应以下范围： `10.0.0.0/8` `172.16.0.0/12` `192.168.0.0/16` . — IPv6 地址则以 `FD` 或 `FC` 开头。
  - **`FILTER_FLAG_GLOBAL_RANGE` (`int`)** — 仅允许全局地址。这些可以在 [RFC 6890](6890) 中找到，其中 `Global` 属性是 `True`。自 PHP 8.2.0 起可用。


- **`FILTER_VALIDATE_MAC` (`int`)** — 验证该值是否是 MAC 地址。
  - **`default`** — 过滤失败时返回的值。



- **`FILTER_UNSAFE_RAW` (`int`)** — 过滤器不执行任何操作。 — 但如果与 `FILTER_FLAG_STRIP_{*}` 和 `FILTER_FLAG_ENCODE_{*}` 过滤器清理 flag 一起使用，可以去除或编码特殊字符。
- **`FILTER_DEFAULT` (`int`)** — 别名 `FILTER_UNSAFE_RAW`。
- **`FILTER_SANITIZE_STRING` (`int`)** — 此过滤器会去除标签并对双引号和单引号进行 HTML 编码。 — 如果与 `FILTER_FLAG_STRIP_{*}` 和 `FILTER_FLAG_ENCODE_{*}` 过滤器清理 flag 一起使用，可以选择性地去除或编码指定字符。 — 可以使用 `FILTER_FLAG_NO_ENCODE_QUOTES` 过滤器 flag 禁用编码引号的行为。
  > 自 PHP 8.1.0 起*弃用*，使用 `htmlspecialchars()` 代替。


  > 此过滤器去除标签的方式不等同于 `strip_tags()`。


- **`FILTER_SANITIZE_STRIPPED` (`int`)** — 别名 `FILTER_SANITIZE_STRING`。
  > 自 PHP 8.1.0 起*弃用*，使用 `htmlspecialchars()` 代替。


- **`FILTER_SANITIZE_ENCODED` (`int`)** — 此过滤器对字符串进行 URL 编码。 — 如果与 `FILTER_FLAG_STRIP_{*}` 和 `FILTER_FLAG_ENCODE_{*}` 过滤器清理 flag 一起使用，可以选择性地去除或编码指定字符。
- **`FILTER_SANITIZE_SPECIAL_CHARS` (`int`)** — 此过滤器对 `'` `"` `<` `>` `&` 和 ASCII 值小于 32 的字符进行 HTML 编码。与 `FILTER_SANITIZE_FULL_SPECIAL_CHARS` 过滤器不同，`FILTER_SANITIZE_SPECIAL_CHARS` 过滤器会忽略 `FILTER_FLAG_NO_ENCODE_QUOTES` flag。 — 如果与 `FILTER_FLAG_STRIP_{*}` 过滤器清理 flag 一起使用，可以选择性地去除指定字符，并且可以使用 `FILTER_FLAG_ENCODE_HIGH` 对 ASCII 值大于 127 的字符进行编码。
- **`FILTER_SANITIZE_FULL_SPECIAL_CHARS` (`int`)** — 此过滤器相当于调用 `htmlspecialchars()` 并设置 `ENT_QUOTES`。 — 可以使用 `FILTER_FLAG_NO_ENCODE_QUOTES` 过滤器 flag 禁用编码引号的行为。
  > 与 `htmlspecialchars()` 一样，此过滤器可识别 default_charset INI 设置。如果检测到字节序列构成了当前字符集中的无效字符，则会拒绝整个字符串，从而返回空字符串。


- **`FILTER_SANITIZE_EMAIL` (`int`)** — 通过移除除了拉丁字母（`[a-zA-Z]`）、数字（`[0-9]`）和特殊字符 `!#$%&'*+-=?^_`{|}~@.[]` 之外的所有字符来清理字符串。
- **`FILTER_SANITIZE_URL` (`int`)** — 通过移除除了拉丁字母（`[a-zA-Z]`）、数字（`[0-9]`）和特殊字符 `$-_.+!*'(),{}|\\^~[]`<>#%";/?:@&=` 之外的所有字符来清理字符串。
- **`FILTER_SANITIZE_NUMBER_INT` (`int`)** — 通过移除除了数字（`[0-9]`）、加号（`+`）和减号（`-`）之外的所有字符来清理字符串。
- **`FILTER_SANITIZE_NUMBER_FLOAT` (`int`)** — 通过移除除了数字（`[0-9]`）、加号（`+`）和减号（`-`）之外的所有字符来清理字符串。
  - **`FILTER_FLAG_ALLOW_FRACTION` (`int`)** — 接受点（`.`）字符，通常表示为整数部分和小数部分之间的分隔符。
  - **`FILTER_FLAG_ALLOW_THOUSAND` (`int`)** — 接受逗号（`,`）字符，通常代表千位分隔符。
  - **`FILTER_FLAG_ALLOW_SCIENTIFIC` (`int`)** — 通过允许 `e` 和 `E` 字符来接受科学计数法中的数字。


  > 如果未使用 `FILTER_FLAG_ALLOW_FRACTION` flag，则会移除小数分隔符，从而改变接收到的值。
  >
  > ```php <?php $number = '12.34'; var_dump(filter_var($number, FILTER_SANITIZE_NUMBER_FLOAT)); var_dump(filter_var($number, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION)); ?> ``` 以上示例会输出： ```text string(4) "1234" string(5) "12.34" ```


- **`FILTER_SANITIZE_ADD_SLASHES` (`int`)** — `addslashes()` 应用于输入。自 PHP 7.3.0 起可用。
- **`FILTER_SANITIZE_MAGIC_QUOTES` (`int`)** — 别名 `FILTER_SANITIZE_ADD_SLASHES`。
  > 自 PHP 7.3.0 起*弃用*，自 PHP 8.0.0 起*移除*。



- **`FILTER_CALLBACK` (`int`)** — 此过滤器将过滤委托给用户定义的函数。`callable` 作为与 `'options'` key 关联的值传递给 `$options` 参数。 — callback 应具有以下签名： `mixed``{callback}()` `string``$value` - **`$value`** — 需要过滤的值。
  > callback 返回的值作为调用过滤函数返回的值。


  **使用 `FILTER_CALLBACK` 验证登录名的示例**

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

  以上示例会输出：

  ```text


  string(10) "val1dL0gin"
  NULL

       
  ```


  > 此过滤器不能与其他任何过滤器 flag 一起使用，例如 `FILTER_NULL_ON_FAILURE`。
